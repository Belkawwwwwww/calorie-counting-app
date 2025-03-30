import React, { FC } from 'react';
import { QuestionComponent } from '@/g_shared/ui/question_component';
import { goalTranslations } from '@/g_shared/lib/utils';

export const TargetQuestion: FC<Props> = (props) => {
    const handleAnswer = (answer: string | number | Date) => {
        const englishAnswer = Object.keys(goalTranslations).find(
            (key) => goalTranslations[key] === answer.toString()
        );
        props.onAnswer(englishAnswer || answer.toString());
    };
    const options = Object.entries(goalTranslations).map(([key, value]) => ({
        value: key,
        label: value,
    }));

    return (
        <QuestionComponent
            options={options}
            selectedAnswer={props.selectedAnswer ?? null}
            onAnswer={handleAnswer}
        />
    );
};
