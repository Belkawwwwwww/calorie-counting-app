import { useReducer } from 'react';
import { reducer } from '../reducer/surveyRuducer';
import { initialState, State } from '../reducer/type';

export const useSurvey = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAnswer = (key: keyof State['answers'], value: any) => {
        dispatch({ type: 'SET_ANSWER', key, value });
    };

    const handleNext = () => {
        if (state.currentQuestionAnswered) {
            dispatch({ type: 'NEXT_QUESTION' });
        } else {
            console.log('Текущий вопрос без ответа');
        }
    };
    return {
        currentQuestionIndex: state.currentQuestionIndex,
        currentQuestionAnswered: state.currentQuestionAnswered,
        answers: state.answers,
        handleAnswer,
        handleNext,
        setCurrentQuestionAnswered: (value: boolean) =>
            dispatch({ type: 'SET_QUESTION_ANSWERED', value }),
    };
};
