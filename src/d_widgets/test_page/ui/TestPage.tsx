import React, { FC, useState } from 'react';
import { z } from 'zod';
import { UIFormLayout } from '@/g_shared/ui/layout';
import {
    ActivityLevelQuestion,
    DateOfBirthQuestion,
    GenderQuestion,
    GrowthQuestion,
    HipGirth,
    TargetQuestion,
    WaistGirth,
    WeightQuestion,
} from '@/d_widgets/test_page/component/test_questions';
import { useRouter } from 'next/router';
import { RouteEnum } from '@/g_shared/model';
import { LoaderTest } from '@/g_shared/ui/loader';
import { dataScheme } from '../../../e_features/survey/model/createSurvey';
import { useGetUserDataQuery } from '../../../e_features/survey/api/surveyApi';
import { NextBtn } from '../component/next_btn/ui/NextBtn';
import { useSurvey } from '../hooks/useSurvey';
import { Container, Questions, Title } from '../style';
import { useCreateSurvey } from '@/e_features/survey/hooks/surveyHooks';

export const Test: FC = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { refetch } = useGetUserDataQuery();
    const { createSurvey, isLoading } = useCreateSurvey();
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
            waist_girth:
                typeof answers.waist_girth === 'string'
                    ? parseInt(answers.waist_girth, 10)
                    : answers.waist_girth,
            hip_girth:
                typeof answers.hip_girth === 'string'
                    ? parseInt(answers.hip_girth, 10)
                    : answers.hip_girth,
        };

        console.log('Подготовленные данные для валидации:', preparedData);
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
            key: 'birthday',
            title: 'ДАТА РОЖДЕНИЯ',
            component: (
                <DateOfBirthQuestion
                    selectedAnswer={answers.birthday}
                    onAnswer={(answer) => handleAnswer('birthday', answer)}
                    onInputValidation={setCurrentQuestionAnswered}
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
        {
            key: 'waist_girth',
            title: 'ОБХВАТ ТАЛИИ',
            component: (
                <WaistGirth
                    selectedAnswer={answers.waist_girth}
                    onAnswer={(answer) => handleAnswer('waist_girth', answer)}
                    onInputValidation={setCurrentQuestionAnswered}
                />
            ),
        },
        {
            key: 'hip_girth',
            title: 'ОБХВАТ БЕДЕР',
            component: (
                <HipGirth
                    selectedAnswer={answers.hip_girth}
                    onAnswer={(answer) => handleAnswer('hip_girth', answer)}
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
                                <div key={question.key}>
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
