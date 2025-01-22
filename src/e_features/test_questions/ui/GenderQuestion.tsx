import React, { FC } from 'react';
import { QuestionComponent } from '@/g_shared/components/question_component';
import { genderTranslations } from '@/g_shared/utils/translation';

export const GenderQuestion: FC<Props> = ({ selectedAnswer, onAnswer }) => {
    const handleAnswer = (answer: string | number | Date) => {
        // Находим английское значение, соответствующее выбранному ответу
        const englishAnswer = Object.keys(genderTranslations).find(
            (key) => genderTranslations[key] === answer.toString()
        );
        onAnswer(englishAnswer || answer.toString());
    };
    // Используем русские варианты в опциях
    const options = Object.entries(genderTranslations).map(([key, value]) => ({
        value: key, // Здесь используется ключ в качестве значения
        label: value, // Значение будет использоваться как метка
    }));

    return (
        <QuestionComponent
            options={options}
            selectedAnswer={selectedAnswer ?? null}
            onAnswer={handleAnswer}
        />
    );
};
