export type State = {
    currentQuestionIndex: number;
    currentQuestionAnswered: boolean;
    answers: {
        gender: string | null;
        target: string | null;
        age: number | null;
        growth: number | null;
        birthday: Date | null;
        activity: string | null;
        weight: number | null;
    };
};
export const initialState: State = {
    currentQuestionIndex: 0,
    currentQuestionAnswered: false,
    answers: {
        gender: null,
        target: null,
        age: null,
        growth: null,
        birthday: null,
        activity: null,
        weight: null,
    },
};
