interface TestQuestionProps {
    selectedAnswer?: string | number| Date|  null;
    onAnswer: (answer: string | number | Date) => void;
}