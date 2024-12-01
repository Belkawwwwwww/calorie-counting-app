import React, { useState } from 'react';
import { z } from 'zod';
import styled from 'styled-components';
import { UIFormLayout } from '@/g - shared/ui/layout';
import {
    ActivityLevelQuestion,
    AgeQuestion,
    DateOfBirthQuestion,
    GenderQuestion,
    GrowthQuestion,
    TargetQuestion,
    WeightQuestion,
} from '@/e - features/test-questions';
import { useRouter } from 'next/router';
import { RouteEnum } from '@/g - shared/model';
import { LoaderTest } from '@/g - shared/ui/loader';
import { useSurvey } from '@/g - shared/hooks';
import { dataScheme } from '../model/createSurvey';
import { useCreateSurveyMutation, useGetUserDataQuery } from '../api/surveyApi';
import { NextBtn } from '../component/NextBtn';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    flex-direction: column;
    position: relative;
`;
const Title = styled.h1`
    font-weight: 200;
    font-size: 18px;
`;
const Questions = styled.div`
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
        setCurrentQuestionAnswered,
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
            birthday:
                answers.birthday instanceof Date
                    ? answers.birthday
                    : answers.birthday
                      ? new Date(answers.birthday)
                      : null,
        };

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
            key: 'gender',
            title: 'ВАШ ПОЛ',
            component: (
                <GenderQuestion
                    selectedAnswer={answers.gender}
                    onAnswer={(answer) => handleAnswer('gender', answer)}
                />
            ),
        },
        {
            key: 'target',
            title: 'ВАША ЦЕЛЬ',
            component: (
                <TargetQuestion
                    selectedAnswer={answers.target}
                    onAnswer={(answer) => handleAnswer('target', answer)}
                />
            ),
        },
        {
            key: 'age',
            title: 'ВВЕДИТЕ ВАШ ВОЗРАСТ',
            component: (
                <AgeQuestion
                    selectedAnswer={answers.age}
                    onAnswer={(answer) => handleAnswer('age', answer)}
                    onInputValidation={setCurrentQuestionAnswered}
                />
            ),
        },
        {
            key: 'growth',
            title: 'ВВЕДИТЕ ВАШ РОСТ',
            component: (
                <GrowthQuestion
                    selectedAnswer={answers.growth}
                    onAnswer={(answer) => handleAnswer('growth', answer)}
                    onInputValidation={setCurrentQuestionAnswered}
                />
            ),
        },
        {
            key: 'date',
            title: 'ДАТА РОЖДЕНИЯ',
            component: (
                <DateOfBirthQuestion
                    onAnswer={(answer) => handleAnswer('birthday', answer)}
                />
            ),
        },
        {
            key: 'activity',
            title: 'КАКОЙ У ВАС ОБРАЗ ЖИЗНИ?',
            component: (
                <ActivityLevelQuestion
                    selectedAnswer={answers.activity}
                    onAnswer={(answer) => handleAnswer('activity', answer)}
                />
            ),
        },
        {
            key: 'weight',
            title: 'ВВЕДИТЕ ВАШЕ ВЕС',
            component: (
                <WeightQuestion
                    selectedAnswer={answers.weight}
                    onAnswer={(answer) => handleAnswer('weight', answer)}
                    onInputValidation={setCurrentQuestionAnswered}
                />
            ),
        },
    ];

    return (
        <Container>
            {loading ? (
                <LoaderTest />
            ) : (
                <>
                    <Title>СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН</Title>
                    <Questions>
                        <form onSubmit={handleSubmit}>
                            {questions.map((question, index) => (
                                <div key={question.title}>
                                    {index === currentQuestionIndex ? (
                                        <UIFormLayout
                                            key={question.title}
                                            content='center'
                                            title={question.title}
                                            form={question.component}
                                            nextButton={
                                                currentQuestionAnswered ? (
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
                                                ) : null
                                            }
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </form>
                    </Questions>
                </>
            )}
        </Container>
    );
};
