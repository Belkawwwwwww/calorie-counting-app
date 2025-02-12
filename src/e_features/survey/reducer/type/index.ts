import { SurveyAnswers } from '@/f_entities/survey/type/surveyModel';

export type State = {
    currentQuestionIndex: number;
    currentQuestionAnswered: boolean;
    answers: SurveyAnswers;
};
export const initialState: State = {
    currentQuestionIndex: 0,
    currentQuestionAnswered: false,
    answers: {
        gender: null,
        target: null,
        growth: null,
        birthday: null,
        activity: null,
        weight: null,
        waist_girth: null,
        hip_girth: null,
    },
};
