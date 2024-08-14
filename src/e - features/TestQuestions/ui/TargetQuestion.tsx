import React, { FC } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';

interface GoalQuestionProps {
    selectedAnswer?: string | null | undefined;
    onAnswer: (answer: string) => void;
    // onNextQuestion: () => void;
}

export const TargetQuestion: FC<GoalQuestionProps> = ({ selectedAnswer, onAnswer }) => {
    const options = ['LOSE WEIGHT', 'MAINTAIN FEMALE', 'GAIN WEIGHT'];
    return (
        <QuestionComponent
            options={options}
            selectedAnswer={selectedAnswer ?? null}
            onAnswer={onAnswer}
            // onNextQuestion={onNextQuestion}
        />
    );
};
