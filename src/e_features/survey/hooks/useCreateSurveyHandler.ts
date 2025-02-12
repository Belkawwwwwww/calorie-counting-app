import { useState } from 'react';
import { SurveyAnswers } from '@/f_entities/survey/type/surveyModel';
import { z } from 'zod';
import { surveyScheme } from '@/f_entities/survey';
import { useCreateSurvey } from './useSurveyHooks';

export const useCreateSurveyHandler = (
    answers: SurveyAnswers,
    onSuccess?: () => void
) => {
    const [loading, setLoading] = useState(false);
    const { createSurvey } = useCreateSurvey();
    // const { refetch, isSuccess } = useGetSurveyQuery();

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
            const validatedData = surveyScheme.parse(preparedData);
            await createSurvey(validatedData);
            setLoading(true);
            if (onSuccess) {
                onSuccess();
            }

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
    return { loading, handleSubmit };
};
