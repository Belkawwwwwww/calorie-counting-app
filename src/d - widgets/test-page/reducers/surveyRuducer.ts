import { z } from 'zod';
import { dataScheme } from '../model/createSurvey';
import { State } from './type';
import { Action } from './action';

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_ANSWER': {
            const { key, value } = action;
            const newAnswers = { ...state.answers, [key]: value };
            let newQuestionAnswered = false;

            if (key === 'age' || key === 'growth' || key === 'weight') {
                try {
                    // Валидация данных
                    dataScheme.parse(newAnswers);
                    newQuestionAnswered = true; // Если валидация прошла успешно
                } catch (e) {
                    if (e instanceof z.ZodError) {
                        newQuestionAnswered = false; // Сбрасываем, если была ошибка валидации
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
