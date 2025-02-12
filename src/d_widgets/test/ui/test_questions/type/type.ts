type Props = {
    selectedAnswer?: string | number | Date | null;
    onAnswer: (answer: string | number | Date) => void;
    onInputValidation?: (isValid: boolean) => void;
};
