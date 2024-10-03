import React, { FC } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import { goalTranslations } from '@/g - shared/utils/translation';

export const TargetQuestion: FC<TestQuestionProps> = ({
    selectedAnswer,
    onAnswer,
}) => {
    const handleAnswer = (answer: string | number | Date) => {
        const englishAnswer = Object.keys(goalTranslations).find(
            (key) => goalTranslations[key] === answer.toString()
        );
        onAnswer(englishAnswer || answer.toString());
    };
    const options = Object.values(goalTranslations);

    return (
        <QuestionComponent
            options={options}
            selectedAnswer={goalTranslations[selectedAnswer as string] ?? null}
            onAnswer={handleAnswer}
        />
    );
};
