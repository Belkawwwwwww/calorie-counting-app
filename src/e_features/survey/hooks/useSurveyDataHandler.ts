import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSurvey } from './useSurvey';
import { prepareAnswers } from '../config/prepareAnswers';
import { surveyScheme } from '@/f_entities/survey';
import { useCreateSurvey } from './useSurveyHooks';
import { useGetSurveyQuery } from '../api/surveyApi';
import { RouteEnum } from '@/g_shared/model';
import { z } from 'zod';
import { getQuestionsConfig } from '../ui/getQuestionConfig';

export const useSurveyDataHandler = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const {
        currentQuestionIndex,
        currentQuestionAnswered,
        answers,
        handleAnswer,
        handleNext,
        setCurrentQuestionAnswered,
    } = useSurvey();
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
    return {
        questions,
        currentQuestionIndex,
        currentQuestionAnswered,
        handleNext,
        handleSubmit,
        loading,
    };
};
