import React, { useState } from 'react';
import { z } from 'zod';
import { useCreateSurveyMutation, useGetUserDataQuery } from '../api/surveyApi';
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
import { dataScheme } from '../model/createSurvey';
import { useRouter } from 'next/router';
import { RouteEnum } from '@/g - shared/model/navigation';
import { NextBtn } from '../component/NextQuestionBtn';
import { LoaderTest } from '@/g - shared/ui/Loader/LoaderTest';
import { useSurvey } from '@/g - shared/hooks/useSurvey';


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
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { refetch } = useGetUserDataQuery();
    const [createSurvey, { isLoading }] = useCreateSurveyMutation();
    const {
        currentQuestionIndex,
        currentQuestionAnswered,
        answers,
        handleAnswer,
        handleNext,
      } = useSurvey();
      

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Преобразовываем данные перед валидацией
        const preparedData = {
            ...answers,
            age:
                typeof answers.age === 'string'
                    ? parseInt(answers.age, 10)
                    : answers.age,
            growth:
                typeof answers.growth === 'string'
                    ? parseInt(answers.growth, 10)
                    : answers.growth,
            weight:
                typeof answers.weight === 'string'
                    ? parseInt(answers.weight, 10)
                    : answers.weight,
            birthday: answers.birthday ? new Date(answers.birthday) : null,
        };
        console.log(answers);
        console.log('prepare', preparedData);

        try {
            const validatedData = dataScheme.parse(preparedData);
            await createSurvey(validatedData);
            setLoading(true);
            refetch();
            setTimeout(() => {
                router.push(RouteEnum.MAIN);
            }, 3000);
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
            {loading ? (
                <LoaderTest />
            ) : (
                <>
                    <StyledTitle>СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН</StyledTitle>
                    <StyledQuestions>
                        <form onSubmit={handleSubmit}>
                            {questions.map((question, index) => (
                                <div key={question.title}>
                                    {index === currentQuestionIndex && (
                                        <UIFormLayout
                                            key={question.title}
                                            content='center'
                                            title={question.title}
                                            form={question.component}
                                            nextButton={
                                                <NextBtn
                                                    isLastQuestion={
                                                        index ===
                                                        questions.length - 1
                                                    }
                                                    isAnswered={
                                                        currentQuestionAnswered
                                                    }
                                                    onNext={handleNext}
                                                    isLoading={isLoading}
                                                />
                                            }
                                        />
                                    )}
                                </div>
                            ))}
                        </form>
                    </StyledQuestions>
                </>
            )}
        </StyledContainer>
    );
};
