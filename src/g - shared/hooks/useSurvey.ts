import { dataScheme } from '@/d - widgets/TestPage';
import { useState } from 'react';
import { z } from 'zod';

export const useSurvey = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestionAnswered, setCurrentQuestionAnswered] =
        useState(false);
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

    const handleAnswer = (key: keyof typeof answers, value: any) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [key]: value,
        }));

        if (key === 'age' || key === 'growth' || key === 'weight') {
            try {
                const dataToValidate = { ...answers, [key]: value }; // создаю объект с текущими ответами
                dataScheme.parse(dataToValidate); // применяю валидацию
                setCurrentQuestionAnswered(true); // если всё прошло успешно, устанавливаем состояние валидности
            } catch (e) {
                if (e instanceof z.ZodError) {
                    setCurrentQuestionAnswered(false); // если ошибка, сбрасываем состояние валидности
                }
            }
        } else {
            // Если это вопрос с выбором, просто установим его значение
            const isValid = !!value; // будет true, если значение не пустое
            setCurrentQuestionAnswered(isValid); // обновляем состояние, указывающее, что ответ валиден
        }
    };

    const handleNext = () => {
        if (currentQuestionAnswered) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setCurrentQuestionAnswered(false); // сброс для следующего вопроса
        } else {
            console.log('Текущий вопрос без ответа');
        }
    };
    return {
        currentQuestionIndex,
        currentQuestionAnswered,
        answers,
        handleAnswer,
        handleNext,
        setCurrentQuestionAnswered,
    };
};
