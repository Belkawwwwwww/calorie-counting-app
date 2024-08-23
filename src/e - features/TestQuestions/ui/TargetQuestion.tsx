import React, { FC } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';

interface GoalQuestionProps {
    selectedAnswer?: string | number | Date | null;
    onAnswer: (answer: string | number | Date) => void;
    // onNextQuestion: () => void;
}

export const TargetQuestion: FC<GoalQuestionProps> = ({
    selectedAnswer,
    onAnswer,
}) => {
    const options = ['LOSE_WEIGHT', 'MAINTAIN_WEIGHT', 'GAIN_WEIGHT'];

    const targetOptions = [
        { label: 'СБРОСИТЬ ВЕС', value: 'LOSE_WEIGHT' },
        { label: 'ПОДДЕРЖАНИЕ ВЕС', value: 'MAINTAIN_WEIGHT' },
        { label: 'НАБОР ВЕСА', value: 'GAIN_WEIGHT' },
    ];
    return (
        <QuestionComponent
            options={options}
            // options={targetOptions.map((option) => option.label)}
            selectedAnswer={selectedAnswer ?? null}
            onAnswer={onAnswer}
            // onNextQuestion={onNextQuestion}
        />
    );
};
