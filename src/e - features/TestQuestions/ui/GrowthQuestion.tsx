import React, { FC, useState } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component';
import { useZodInputValidation } from '@/g - shared/hooks';
import { z } from 'zod';
import { dataScheme } from '@/d - widgets/TestPage';

export const GrowthQuestion: FC<TestQuestionProps> = ({
    onAnswer,
    selectedAnswer,
    onInputValidation,
}) => {
    const { inputValue: growth, handleInputChange } = useZodInputValidation(
        dataScheme.shape.growth
    );
    const [validationError, setValidationError] = useState<string>('');

    const handleGrowthChange = (value: string) => {
        const growthValue = Number(value); // строку в число

        handleInputChange({
            target: { value },
        } as React.ChangeEvent<HTMLInputElement>);

        try {
            dataScheme.shape.growth.parse(growthValue);
            setValidationError('');
            onAnswer(growthValue); // Передаем number
            if (onInputValidation) {
                onInputValidation(true);
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errorMessage = error.errors[0].message;
                setValidationError(errorMessage);
                if (onInputValidation) {
                    onInputValidation(false); // Устанавливаем неуспешный статус
                }
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
