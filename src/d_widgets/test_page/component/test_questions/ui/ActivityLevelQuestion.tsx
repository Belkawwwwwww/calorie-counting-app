import React, { FC } from 'react';
import { activityTranslations } from '@/g_shared/utils/translation';
import { QuestionComponent } from '@/g_shared/components/question_component';

export const ActivityLevelQuestion: FC<Props> = ({
    selectedAnswer,
    onAnswer,
}) => {
    const handleAnswer = (answer: string | number | Date) => {
        const englishAnswer = Object.keys(activityTranslations).find(
            (key) => activityTranslations[key] === answer.toString()
        );
        onAnswer(englishAnswer || answer.toString());
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
            selectedAnswer={selectedAnswer ?? null}
            onAnswer={handleAnswer}
        />
    );
};
