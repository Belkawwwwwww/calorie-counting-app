import React, { FC } from 'react';
import { QuestionComponent } from '@/g_shared/ui/question_component';
import { genderTranslations } from '@/g_shared/lib/utils';

export const GenderQuestion: FC<Props> = (props) => {
    const handleAnswer = (answer: string | number | Date) => {
        // Находим английское значение, соответствующее выбранному ответу
        const englishAnswer = Object.keys(genderTranslations).find(
            (key) => genderTranslations[key] === answer.toString()
        );
        props.onAnswer(englishAnswer || answer.toString());
    };
    // Используем русские варианты в опциях
    const options = Object.entries(genderTranslations).map(([key, value]) => ({
        value: key, // исп ключ в качестве значения
        label: value, // Значение будет использоваться как метка
    }));

    return (
        <QuestionComponent
            options={options}
            selectedAnswer={props.selectedAnswer ?? null}
            onAnswer={handleAnswer}
        />
    );
};
