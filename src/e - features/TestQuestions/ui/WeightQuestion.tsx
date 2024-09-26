import React, { FC } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import { useZodInputValidation } from '@/g - shared/hooks/useZodInputValidation';
import { dataScheme } from '@/d - widgets/TestPage/model/createSurvey';

interface WeightQuestionProps {
    selectedAnswer?: number | null;
    onAnswer: (answer: string | number | Date) => void;
}

export const WeightQuestion: FC<WeightQuestionProps> = ({
    onAnswer,
    selectedAnswer,
}) => {
    const { inputValue: weight, handleInputChange } = useZodInputValidation(
        dataScheme.shape.weight
    );

    const handleWeightChange = (value: string) => {
        handleInputChange({
            target: { value },
        } as React.ChangeEvent<HTMLInputElement>);
        onAnswer(value);
    };

    return (
        <QuestionComponent
            inputValue={weight.toString()}
            onInputChange={handleWeightChange}
            onAnswer={onAnswer}
            inputType='number'
            inputName='weight'
            inputId='weight'
            selectedAnswer={selectedAnswer ?? null}
        />
    );
};
