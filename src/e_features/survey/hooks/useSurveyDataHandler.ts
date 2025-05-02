import { surveyScheme } from '@/f_entities/survey';
import { RouteEnum } from '@/g_shared/model';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { z } from 'zod';
import { useGetSurveyQuery } from '../api/surveyApi';
import { prepareAnswers } from '../config/prepareAnswers';
import { getQuestionsConfig } from '../ui/getQuestionConfig';
import { useSurvey } from './useSurvey';
import { useCreateSurvey } from './useSurveyHooks';

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
        const preparedData = prepareAnswers(answers);
        try {
            const validatedData = surveyScheme.parse(preparedData);
            await createSurvey(validatedData);
            setLoading(true);
            refetch();
            setTimeout(() => {
                router.push(RouteEnum.MAIN);
            }, 2000);
        } catch (e) {
            if (e instanceof z.ZodError) {
                console.error('Validation error:', e.issues);
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
