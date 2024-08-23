import React, { useState } from 'react';
import { z } from 'zod';

import { useCreateSurveyMutation } from '../api/surveyApi';
import styled from 'styled-components';
import { UIFormLayout } from '@/g - shared/ui/layout';
import {
    ActivityLevelQuestion,
    DateOfBirthQuestion,
    GenderQuestion,
    GrowthQuestion,
    TargetQuestion,
} from '@/e - features/TestQuestions';
import { AgeQuestion } from '@/e - features/TestQuestions/ui/AgeQuestion';
import { WeightQuestion } from '@/e - features/TestQuestions/ui/WeightQuestion';
import { Button } from '@/g - shared/ui/Button';
import { LoadingIndicator } from '@/g - shared/ui/Loader/LoadingIndicator';
import { dataScheme } from '../model/createSurvey';
import { useAppDispatch } from '@/g - shared/lib/store';
import { setUserDetails } from '@/f - entities/redux/user/model/action/action';
import { useRouter } from 'next/router';
import { RouteEnum } from '@/g - shared/model/navigation';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    flex-direction: column;
    position: relative;
`;
const StyledTitle = styled.h1`
    font-weight: 200;
    font-size: 18px;
`;
const StyledQuestions = styled.div`
    display: flex;
    justify-content: center;
`;

export const Test: React.FC = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [createSurvey, { isLoading, isError, error }] =
        useCreateSurveyMutation();
    const [answers, setAnswers] = useState<{
        gender: string | null;
        target: string | null;
        age: number | null;
        growth: number | null;
        birthday: Date | null;
        activity: string | null;
        weight: number | null;
    }>({
        gender: null,
        target: null,
        age: null,
        growth: null,
        birthday: null,
        activity: null,
        weight: null,
    });

    const handleAnswer = (
        key: keyof typeof answers,
        value: (typeof answers)[keyof typeof answers]
    ) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [key]: value,
        }));
    };
    console.log(answers);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const formData = Object.fromEntries(form.entries());

        // Преобразовываем данные перед валидацией
        const preparedData = {
            ...answers,
            age: Number(formData.age),
            growth: Number(formData.growth),
            weight: Number(formData.weight),
            birthday: formData.birthday
                ? new Date(formData.birthday as string)
                : null,
        };
        console.log(answers);

        try {
            const validatedData = dataScheme.parse(preparedData);
            await createSurvey(validatedData);
            const userUpdateData = {
                gender: answers.gender,
                target: answers.target,
                age: Number(formData.age),
                growth: Number(formData.growth),
                birthday: preparedData.birthday
                    ? preparedData.birthday.toISOString()
                    : null,
                activity: answers.activity,
                weight: Number(formData.weight),
            };
            dispatch(setUserDetails(userUpdateData));
            router.push(RouteEnum.PROFILE);
            console.log(answers);
            console.log('успешно');
        } catch (e) {
            if (e instanceof z.ZodError) {
                console.error('Validation error:', e.issues);
                console.log(answers);
            } else {
                console.error('Error creating survey:', e);
            }
        }
    };
    return (
        <StyledContainer>
            <StyledTitle>СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН</StyledTitle>
            <StyledQuestions>
                <form onSubmit={handleSubmit}>
                    <UIFormLayout
                        content='center'
                        title='ВАШ ПОЛ'
                        form={
                            <GenderQuestion
                                selectedAnswer={answers.gender}
                                onAnswer={(answer) =>
                                    handleAnswer('gender', answer)
                                }
                            />
                        }
                    />
                    <UIFormLayout
                        content='center'
                        title='ВАША ЦЕЛЬ'
                        form={
                            <TargetQuestion
                                selectedAnswer={answers.target}
                                onAnswer={(answer) =>
                                    handleAnswer('target', answer)
                                }
                            />
                        }
                    />
                    <UIFormLayout
                        content='center'
                        title='ВВЕДИТЕ ВАШ ВОЗРАСТ'
                        form={
                            <AgeQuestion
                                onAnswer={(answer) =>
                                    handleAnswer('age', answer)
                                }
                            />
                        }
                    />
                    <UIFormLayout
                        content='center'
                        title='ВВЕДИТЕ ВАШ РОСТ'
                        form={
                            <GrowthQuestion
                                onAnswer={(answer) =>
                                    handleAnswer('growth', answer)
                                }
                            />
                        }
                    />
                    <UIFormLayout
                        content='center'
                        title='ДАТА РОЖДЕНИЯ'
                        form={
                            <DateOfBirthQuestion
                                onAnswer={(answer) =>
                                    handleAnswer('birthday', answer)
                                }
                            />
                        }
                    />
                    <UIFormLayout
                        content='center'
                        title='НАСКОЛЬКО ВЫ АКТИВНЫ?'
                        form={
                            <ActivityLevelQuestion
                                selectedAnswer={answers.activity}
                                onAnswer={(answer) =>
                                    handleAnswer('activity', answer)
                                }
                            />
                        }
                    />
                    <UIFormLayout
                        content='center'
                        title='ВВЕДИТЕ ВАШЕ ВЕС'
                        form={
                            <WeightQuestion
                                onAnswer={(answer) =>
                                    handleAnswer('weight', answer)
                                }
                            />
                        }
                    />
                    <Button
                        $variant='primary'
                        $btnWidth='l'
                        $btnSquareSize='button--square--size-m'
                        type='submit'
                    >
                        {isLoading ? (
                            <LoadingIndicator />
                        ) : (
                            'СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН'
                        )}
                    </Button>
                </form>
            </StyledQuestions>
        </StyledContainer>
    );
};
