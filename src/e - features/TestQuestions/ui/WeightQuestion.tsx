import React, { FC } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import styled from 'styled-components';
import { useZodInputValidation } from '@/g - shared/hooks/useZodInputValidation';
import { dataScheme } from '@/d - widgets/TestPage/model/createSurvey';

interface WeightQuestionProps {
    selectedAnswer?: string | null | undefined;
    onAnswer: (answer: string) => void;
    // onNextQuestion: () => void;
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
    };

    // const handleSubmit = () => {
    //     if (isInputValid) {
    //         onAnswer(inputValue);
    //         onNextQuestion();
    //     }
    // };

    return (
        <QuestionComponent
            inputValue={weight.toString()}
            onInputChange={handleWeightChange}
            onAnswer={onAnswer}
            inputType='weight'
            inputName='weight'
            inputId='weight'
            selectedAnswer={selectedAnswer ?? null}
            // onNextQuestion={onNextQuestion}
        />
    );
};
