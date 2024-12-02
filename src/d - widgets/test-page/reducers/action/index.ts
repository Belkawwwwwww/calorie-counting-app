import { State } from '../type';

export type Action =
    | { type: 'SET_ANSWER'; key: keyof State['answers']; value: any }
    | { type: 'NEXT_QUESTION' }
    | { type: 'SET_QUESTION_ANSWERED'; value: boolean };
