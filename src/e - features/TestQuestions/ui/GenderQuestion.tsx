import React, { FC } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import { genderTranslations } from '@/g - shared/utils/translation';

interface GenderQuestionProps {
    selectedAnswer?: string | null;
    onAnswer: (answer: string | number | Date) => void;
}

export const GenderQuestion: FC<GenderQuestionProps> = ({
    selectedAnswer,
    onAnswer,
}) => {
    const handleAnswer = (answer: string | number | Date) => {
        // Находим английское значение, соответствующее выбранному ответу
        const englishAnswer = Object.keys(genderTranslations).find(
            (key) => genderTranslations[key] === answer.toString()
        );
        onAnswer(englishAnswer || answer.toString());
    };
    // Используем русские варианты в опциях
    const options = Object.values(genderTranslations);

    return (
        <QuestionComponent
            options={options}
            selectedAnswer={
                genderTranslations[selectedAnswer as string] ?? null
            }
            onAnswer={handleAnswer}
        />
    );
};
