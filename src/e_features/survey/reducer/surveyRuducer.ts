import { surveyScheme } from '@/f_entities/survey';
import { z } from 'zod';
import { Action } from './action';
import { State } from './type';

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_ANSWER': {
            const { key, value } = action;
            const newAnswers = { ...state.answers, [key]: value };
            let newQuestionAnswered = false;

            if (
                key === 'growth' ||
                key === 'weight' ||
                key === 'waist_girth' ||
                key === 'hip_girth'
            ) {
                try {
                    surveyScheme.parse(newAnswers);
                    newQuestionAnswered = true; 
                } catch (e) {
                    if (e instanceof z.ZodError) {
                        newQuestionAnswered = false; // Сбрас, если была ошибка валидации
                    }
                }
            } else {
                // Если это вопрос с выбором, просто проверяем, есть ли значение
                newQuestionAnswered = !!value;
            }

            return {
                ...state,
                answers: newAnswers,
                currentQuestionAnswered: newQuestionAnswered,
            };
        }
        case 'NEXT_QUESTION':
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
                currentQuestionAnswered: false, // Сброс для следующего вопроса
            };
        case 'SET_QUESTION_ANSWERED':
            return { ...state, currentQuestionAnswered: action.value };
        default:
            return state;
    }
};

export { reducer };
