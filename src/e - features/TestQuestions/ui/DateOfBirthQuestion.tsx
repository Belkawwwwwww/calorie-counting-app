import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import { InputWithRules } from '@/e - features/input-with-rules';
import { useZodInputValidation } from '@/g - shared/hooks/useZodInputValidation';
import { dataScheme } from '@/d - widgets/TestPage/model/createSurvey';

interface DateOfBirthQuestionProps {
    selectedAnswer?: string | number | Date | null;
    onAnswer: (answer: string | number | Date) => void; 
    // onNextQuestion: () => void;
}

export const DateOfBirthQuestion: FC<DateOfBirthQuestionProps> = ({
    onAnswer,
    selectedAnswer, 
}) => {
    const { inputValue: birthday, handleInputChange } = useZodInputValidation(
        dataScheme.shape.birthday
    );
    const handleBirthdayhChange = (value: string) => {
        handleInputChange({
            target: { value },
        } as React.ChangeEvent<HTMLInputElement>);
        onAnswer(value);
    };

    // const handleSubmit = () => {
    //     onAnswer(inputValue);
    //     onNextQuestion();
    // };

    // const isDateInPast = (value: string): boolean => {
    //     const date = new Date(value);
    //     const today = new Date();
    //     today.setHours(0, 0, 0, 0); // Установить время на начало дня (00:00:00)
    //     return date < today;
    // };

    return (
        <QuestionComponent
            inputValue={birthday.toString()}
            onInputChange={handleBirthdayhChange}
            selectedAnswer={selectedAnswer ?? null}
            onAnswer={onAnswer}
            inputType='date'
            inputName='birthday'
            inputId='birthday'
            // onNextQuestion={onNextQuestion}
        />
    );
};
