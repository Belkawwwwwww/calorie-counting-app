import React, { FC } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import styled from 'styled-components';
import { InputWithRules } from '@/e - features/input-with-rules';
import { useZodInputValidation } from '@/g - shared/hooks/useZodInputValidation';
import { dataScheme } from '@/d - widgets/TestPage/model/createSurvey';

interface GrowthQuestionProps {
    selectedAnswer?: string | number | Date | null;
    onAnswer: (answer: string | number | Date) => void; 
    // onNextQuestion: () => void;
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

    // const handleSubmit = () => {
    //     if (isInputValid) {
    //         onAnswer(inputValue);
    //         onNextQuestion();
    //     }
    // };

    return (
        <QuestionComponent
            inputValue={growth ? growth.toString() : ''}
            onInputChange={handleGrowthChange}
            selectedAnswer={selectedAnswer ?? null}
            onAnswer={onAnswer}
            inputType='number'
            inputName='growth'
            inputId='growth'
            // onNextQuestion={onNextQuestion}
        />
    );
};
