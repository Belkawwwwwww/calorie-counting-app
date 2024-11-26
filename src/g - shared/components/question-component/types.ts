import { z, ZodSchema } from 'zod';

export interface Option {
    value: string | number;
    label: string;
}

export interface QuestionComponentProps {
    title?: string;
    options?: Option[];
    selectedAnswer: string | number | Date | null;
    onAnswer?: (answer: string | number | Date) => void;
    inputValue?: string;
    inputError?: string;
    inputType?: string ;
    inputId?: string;
    inputName?: string;
    validationSchema?: ZodSchema;
    onValidValue?: (value: string | number | Date) => void;
    onInputChange?: (value: string) => void;
}