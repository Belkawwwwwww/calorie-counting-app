export type State = {
    currentQuestionIndex: number;
    currentQuestionAnswered: boolean;
    answers: {
        gender: string | null;
        target: string | null;
        growth: number | null;
        birthday: Date | null;
        activity: string | null;
        weight: number | null;
        waist_girth: number | null;
        hip_girth: number | null;
    };
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
