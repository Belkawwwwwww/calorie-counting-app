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
            router.push(RouteEnum.MAIN);
            console.log(answers);
            console.log('успешно');
        } catch (e) {
            if (e instanceof z.ZodError) {
                console.error('Validation error:', e.issues);
                console.log(answers);
            } else {
                console.error('Ошибка:', e);
            }
        }
    };

    const questions = [
        {
            title: 'ВАШ ПОЛ',
            component: (
                <GenderQuestion
                    selectedAnswer={answers.gender}
                    onAnswer={(answer) => handleAnswer('gender', answer)}
                />
            ),
        },
        {
            title: 'ВАША ЦЕЛЬ',
            component: (
                <TargetQuestion
                    selectedAnswer={answers.target}
                    onAnswer={(answer) => handleAnswer('target', answer)}
                />
            ),
        },
        {
            title: 'ВВЕДИТЕ ВАШ ВОЗРАСТ',
            component: (
                <AgeQuestion
                    onAnswer={(answer) => handleAnswer('age', answer)}
                />
            ),
        },
        {
            title: 'ВВЕДИТЕ ВАШ РОСТ',
            component: (
                <GrowthQuestion
                    onAnswer={(answer) => handleAnswer('growth', answer)}
                />
            ),
        },
        {
            title: 'ДАТА РОЖДЕНИЯ',
            component: (
                <DateOfBirthQuestion
                    onAnswer={(answer) => handleAnswer('birthday', answer)}
                />
            ),
        },
        {
            title: 'КАКОЙ У ВАС ОБРАЗ ЖИЗНИ?',
            component: (
                <ActivityLevelQuestion
                    selectedAnswer={answers.activity}
                    onAnswer={(answer) => handleAnswer('activity', answer)}
                />
            ),
        },
        {
            title: 'ВВЕДИТЕ ВАШЕ ВЕС',
            component: (
                <WeightQuestion
                    onAnswer={(answer) => handleAnswer('weight', answer)}
                />
            ),
        },
    ];

    return (
        <StyledContainer>
            <StyledTitle>СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН</StyledTitle>
            <StyledQuestions>
                <form onSubmit={handleSubmit}>
                    {questions.map((question, index) => (
                        <UIFormLayout
                            key={question.title}
                            content='center'
                            title={question.title}
                            form={question.component}
                        />
                    ))}
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
