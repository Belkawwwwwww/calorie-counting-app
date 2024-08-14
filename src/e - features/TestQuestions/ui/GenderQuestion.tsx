import React, { FC } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';

interface GenderQuestionProps {
    selectedAnswer?: string | null | undefined;

    onAnswer: (answer: string) => void;
    // onNextQuestion: () => void;
}

export const GenderQuestion: FC<GenderQuestionProps> = ({ selectedAnswer, onAnswer }) => {
    const options = ['FEMALE', 'MALE'];

    return (
        <QuestionComponent
            options={options}
            selectedAnswer={selectedAnswer ?? null}

            onAnswer={onAnswer}
            // onNextQuestion={onNextQuestion}
        />
    );
};
