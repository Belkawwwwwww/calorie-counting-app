import React, { FC } from 'react';
import { QuestionComponent } from '@/g_shared/components/question_component';
import { goalTranslations } from '@/g_shared/utils/translation';

export const TargetQuestion: FC<Props> = ({ selectedAnswer, onAnswer }) => {
    const handleAnswer = (answer: string | number | Date) => {
        const englishAnswer = Object.keys(goalTranslations).find(
            (key) => goalTranslations[key] === answer.toString()
        );
        onAnswer(englishAnswer || answer.toString());
    };
    const options = Object.entries(goalTranslations).map(([key, value]) => ({
        value: key,
        label: value,
    }));

    return (
        <QuestionComponent
            options={options}
            selectedAnswer={selectedAnswer ?? null}
            onAnswer={handleAnswer}
        />
    );
};
