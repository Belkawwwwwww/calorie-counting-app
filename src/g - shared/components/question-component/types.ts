import { ZodSchema } from 'zod';

export type Option = {
    value: string | number;
    label: string;
};

export type Props = {
    title?: string;
    options?: Option[];
    selectedAnswer: string | number | Date | null;
    onAnswer?: (answer: string | number | Date) => void;
    inputValue?: string;
    inputError?: string;
    inputType?: string;
    inputId?: string;
    inputName?: string;
    validationSchema?: ZodSchema;
    onValidValue?: (value: string | number | Date) => void;
    onInputChange?: (value: string) => void;
};
