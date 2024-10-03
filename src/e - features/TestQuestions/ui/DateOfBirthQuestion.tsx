import React, { FC } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import { useZodInputValidation } from '@/g - shared/hooks/useZodInputValidation';
import { dataScheme } from '@/d - widgets/TestPage/model/createSurvey';

export const DateOfBirthQuestion: FC<TestQuestionProps> = ({
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

    return (
        <QuestionComponent
            inputValue={birthday.toString()}
            onInputChange={handleBirthdayhChange}
            selectedAnswer={selectedAnswer ?? null}
            onAnswer={onAnswer}
            inputType='date'
            inputName='birthday'
            inputId='birthday'
        />
    );
};
