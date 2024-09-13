import React, { FC } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import { goalTranslations } from '@/g - shared/utils/translation';

interface GoalQuestionProps {
    selectedAnswer?: string | null;
    onAnswer: (answer: string | number | Date) => void;
}

export const TargetQuestion: FC<GoalQuestionProps> = ({
    selectedAnswer,
    onAnswer,
}) => {
    const handleAnswer = (answer: string | number | Date) => {
        const englishAnswer = Object.keys(goalTranslations).find(
            (key) => goalTranslations[key] === answer.toString()
        );
        onAnswer(englishAnswer || answer.toString());
    };
    const options = Object.values(goalTranslations)

   
    return (
        <QuestionComponent
            options={options}
            selectedAnswer={goalTranslations[selectedAnswer as string] ?? null}
            onAnswer={handleAnswer}
        />
    );
};
