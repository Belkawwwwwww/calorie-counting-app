import React, { FC } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import { useZodInputValidation } from '@/g - shared/hooks/useZodInputValidation';
import { dataScheme } from '@/d - widgets/TestPage/model/createSurvey';

interface GrowthQuestionProps {
    selectedAnswer?: number | null;
    onAnswer: (answer: string | number | Date) => void;
}

export const GrowthQuestion: FC<GrowthQuestionProps> = ({
    onAnswer,
    selectedAnswer,
}) => {
    const { inputValue: growth, handleInputChange } = useZodInputValidation(
        dataScheme.shape.growth
    );
    const handleGrowthChange = (value: string) => {
        handleInputChange({
            target: { value },
        } as React.ChangeEvent<HTMLInputElement>);
        onAnswer(value);
    };

    return (
        <QuestionComponent
            inputValue={growth ? growth.toString() : ''}
            onInputChange={handleGrowthChange}
            selectedAnswer={selectedAnswer ?? null}
            onAnswer={onAnswer}
            inputType='number'
            inputName='growth'
            inputId='growth'
        />
    );
};
