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
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestionAnswered, setCurrentQuestionAnswered] =
        useState(false);
    const router = useRouter();
    const [createSurvey, { isLoading }] = useCreateSurveyMutation();
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
        setCurrentQuestionAnswered(true);
        console.log(currentQuestionIndex);
    };
    console.log(answers);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const form = new FormData(e.currentTarget);
        // const formData = Object.fromEntries(form.entries());

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
            nextButtonText: 'Следующий вопрос',
        },
        {
            title: 'ВАША ЦЕЛЬ',
            component: (
                <TargetQuestion
                    selectedAnswer={answers.target}
                    onAnswer={(answer) => handleAnswer('target', answer)}
                />
            ),
            nextButtonText: 'Следующий вопрос',
        },
        {
            title: 'ВВЕДИТЕ ВАШ ВОЗРАСТ',
            component: (
                <AgeQuestion
                    onAnswer={(answer) => handleAnswer('age', answer)}
                />
            ),
            nextButtonText: 'Следующий вопрос',
        },
        {
            title: 'ВВЕДИТЕ ВАШ РОСТ',
            component: (
                <GrowthQuestion
                    onAnswer={(answer) => handleAnswer('growth', answer)}
                />
            ),
            nextButtonText: 'Следующий вопрос',
        },
        {
            title: 'ДАТА РОЖДЕНИЯ',
            component: (
                <DateOfBirthQuestion
                    onAnswer={(answer) => handleAnswer('birthday', answer)}
                />
            ),
            nextButtonText: 'Следующий вопрос',
        },
        {
            title: 'КАКОЙ У ВАС ОБРАЗ ЖИЗНИ?',
            component: (
                <ActivityLevelQuestion
                    selectedAnswer={answers.activity}
                    onAnswer={(answer) => handleAnswer('activity', answer)}
                />
            ),
            nextButtonText: 'Следующий вопрос',
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
                        <div key={question.title}>
                            {index === currentQuestionIndex && (
                                <UIFormLayout
                                    key={question.title}
                                    content='center'
                                    title={question.title}
                                    form={question.component}
                                    nextButton={
                                        currentQuestionAnswered &&
                                        index < questions.length - 1 ? (
                                            <Button
                                                $variant='primary'
                                                $btnWidth='l'
                                                $btnSquareSize='button--square--size-m'
                                                type='button'
                                                onClick={() => {
                                                    setCurrentQuestionAnswered(
                                                        false
                                                    );
                                                    setCurrentQuestionIndex(
                                                        index + 1
                                                    );
                                                }}
                                            >
                                                {
                                                    questions[index]
                                                        .nextButtonText
                                                }
                                            </Button>
                                        ) : currentQuestionIndex ===
                                              questions.length - 1 &&
                                          answers.weight !== null ? (
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
                                        ) : null
                                    }
                                />
                            )}
                        </div>
                    ))}
                </form>
            </StyledQuestions>
        </StyledContainer>
    );
};
