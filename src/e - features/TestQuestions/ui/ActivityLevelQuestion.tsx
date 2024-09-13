import React, { FC } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import { activityTranslations } from '@/g - shared/utils/translation';

interface ActivityLevelQuestionProps {
    selectedAnswer?: string | number | Date | null;
    onAnswer: (answer: string | number | Date) => void;
}

export const ActivityLevelQuestion: FC<ActivityLevelQuestionProps> = ({
    selectedAnswer,
    onAnswer,
}) => {
    const handleAnswer = (answer: string | number | Date) => {
        const englishAnswer = Object.keys(activityTranslations).find(
            (key) => activityTranslations[key] === answer.toString()
        );
        onAnswer(englishAnswer || answer.toString());
    };
    const options = Object.values(activityTranslations);
    
    return (
        <QuestionComponent
            options={options}
            selectedAnswer={activityTranslations[selectedAnswer as string] ?? null}
            onAnswer={handleAnswer}
        />
    );
};
