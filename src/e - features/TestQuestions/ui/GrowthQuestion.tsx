import React, { FC, useState } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import { useZodInputValidation } from '@/g - shared/hooks/useZodInputValidation';
import { dataScheme } from '@/d - widgets/TestPage/model/createSurvey';
import { z } from 'zod';

export const GrowthQuestion: FC<TestQuestionProps> = ({
    onAnswer,
    selectedAnswer,
}) => {
    const { inputValue: growth, handleInputChange } = useZodInputValidation(
        dataScheme.shape.growth
    );
    const [validationError, setValidationError] = useState<string>('');

    const handleGrowthChange = (value: string) => {
        const ageValue = Number(value); // строку в число

        handleInputChange({
            target: { value },
        } as React.ChangeEvent<HTMLInputElement>);

        try {
            dataScheme.shape.age.parse(ageValue); // проверка значения возраста
            setValidationError('');
            onAnswer(ageValue); // Передаем number
        } catch (error) {
            if (error instanceof z.ZodError) {
                setValidationError(error.errors[0].message);
            }
        }
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
            inputError={validationError}
        />
    );
};
