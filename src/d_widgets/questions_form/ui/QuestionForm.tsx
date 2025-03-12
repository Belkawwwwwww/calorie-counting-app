import {
    getQuestionsConfig,
    useCreateSurvey,
    useSurvey,
} from '@/e_features/survey';
import { useGetSurveyQuery } from '@/e_features/survey/api/surveyApi';
import { surveyScheme } from '@/f_entities/survey';
import { prepareAnswers } from '@/g_shared/lib/utils/prepareAnswers';
import { RouteEnum } from '@/g_shared/model';
import { UIFormLayout } from '@/g_shared/ui/layout';
import { LoaderTest } from '@/g_shared/ui/loader';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { z } from 'zod';
import { Questions, Title } from './style';
import { NextBtn } from '@/g_shared/ui/next_btn';

export const QuestionForm: FC = () => {
    const {
        currentQuestionIndex,
        currentQuestionAnswered,
        answers,
        handleAnswer,
        handleNext,
        setCurrentQuestionAnswered,
    } = useSurvey();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { createSurvey } = useCreateSurvey();
    const { refetch } = useGetSurveyQuery();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Преобразовываем данные перед валидацией
        const preparedData = prepareAnswers(answers);

        console.log('Подготовленные данные для валидации:', preparedData);
        try {
            const validatedData = surveyScheme.parse(preparedData);
            await createSurvey(validatedData);
            setLoading(true);
            refetch();
            setTimeout(() => {
                router.push(RouteEnum.MAIN);
            }, 2000);
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
    const questions = getQuestionsConfig(
        answers,
        handleAnswer,
        setCurrentQuestionAnswered
    );
    return (
        <>
            {loading ? (
                <>
                    <Title>УЖЕ ПОЧТИ ВСЕ ГОТОВО</Title>
                    <LoaderTest />
                </>
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
                                                        isLoading={loading}
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
        </>
    );
};
