import React, { FC } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import styled from 'styled-components';
import { InputWithRules } from '@/e - features/input-with-rules';
import { useZodInputValidation } from '@/g - shared/hooks/useZodInputValidation';
import { dataScheme } from '@/d - widgets/TestPage/model/createSurvey';

interface GrowthQuestionProps {
    selectedAnswer?: string | null | undefined;
    onAnswer: (answer: string) => void;
    // onNextQuestion: () => void;
}

export const GrowthQuestion: FC<GrowthQuestionProps> = ({
    onAnswer,
    selectedAnswer,
}) => {
    // const validationRegex = /^[1-9]\d*$/;
    const { inputValue: growth, handleInputChange } = useZodInputValidation(
        dataScheme.shape.growth
    );
    const handleGrowthChange = (value: string) => {
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
            inputValue={growth.toString()}
            onInputChange={handleGrowthChange}
            selectedAnswer={selectedAnswer ?? null}
            onAnswer={onAnswer}
            inputType='growth'
            inputName='growth'
            inputId='growth'
            // onNextQuestion={onNextQuestion}
        />
    );
};
