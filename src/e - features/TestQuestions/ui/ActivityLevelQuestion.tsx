import React, { FC } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';

interface ActivityLevelQuestionProps {
    selectedAnswer?: string | number | Date | null;
    onAnswer: (answer: string | number | Date) => void;
    // onNextQuestion: () => void;
}

export const ActivityLevelQuestion: FC<ActivityLevelQuestionProps> = ({
    selectedAnswer,
    onAnswer,
}) => {
    const options = [
        'SEDENTARY_LIFESTYLE',
        'MODERATE_LIFESTYLE',
        'ACTIVE_LIFESTYLE',
        'HIGHLY_ACTIVE_LIFESTYLE',
    ];

    // const activityOptions = [
    //     { label: 'СИДЯЧИЙ ОБРАЗ ЖИЗНИ', value: 'SEDENTARY_LIFESTYLE' },
    //     { label: 'УМЕРЕННЫЙ ОБРАЗ ЖИЗНИ', value: 'MODERATE_LIFESTYLE' },
    //     { label: 'АКТИВНЫЙ ОБРАЗ ЖИЗНИ', value: 'ACTIVE_LIFESTYLE' },
    //     {
    //         label: 'ОЧЕНЬ АКТИВНЫЙ ОБРАЗ ЖИЗНИ',
    //         value: 'HIGHLY_ACTIVE_LIFESTYLE',
    //     },
    // ];

    return (
        <QuestionComponent
            options={options}
            // options={activityOptions.map((option) => option.label)}
            selectedAnswer={selectedAnswer ?? null}
            onAnswer={onAnswer}
            // onNextQuestion={onNextQuestion}
            // customOption={StyledOption}
        />
    );
};
