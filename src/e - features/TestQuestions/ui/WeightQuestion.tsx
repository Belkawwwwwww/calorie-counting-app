import React, { FC, useState } from 'react';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import { useZodInputValidation } from '@/g - shared/hooks/useZodInputValidation';
import { dataScheme } from '@/d - widgets/TestPage/model/createSurvey';
import { z } from 'zod';

export const WeightQuestion: FC<TestQuestionProps> = ({
    onAnswer,
    selectedAnswer,
}) => {
    const { inputValue: weight, handleInputChange } = useZodInputValidation(
        dataScheme.shape.weight
    );
    const [validationError, setValidationError] = useState<string>('');


    const handleWeightChange = (value: string) => {
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
            inputValue={weight.toString()}
            onInputChange={handleWeightChange}
            onAnswer={onAnswer}
            inputType='number'
            inputName='weight'
            inputId='weight'
            selectedAnswer={selectedAnswer ?? null}
            inputError={validationError}
        />
    );
};
