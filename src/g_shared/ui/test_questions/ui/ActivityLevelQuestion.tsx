import React, { FC } from 'react';
import { activityTranslations } from '@/g_shared/lib/utils';
import { QuestionComponent } from '@/g_shared/ui/question_component';

export const ActivityLevelQuestion: FC<Props> = (props) => {
    const handleAnswer = (answer: string | number | Date) => {
        const englishAnswer = Object.keys(activityTranslations).find(
            (key) => activityTranslations[key] === answer.toString()
        );
        props.onAnswer(englishAnswer || answer.toString());
    };
    const options = Object.entries(activityTranslations).map(
        ([key, value]) => ({
            value: key,
            label: value,
        })
    );

    return (
        <QuestionComponent
            options={options}
            selectedAnswer={props.selectedAnswer ?? null}
            onAnswer={handleAnswer}
        />
    );
};
