import React, { FC, useState } from 'react';
import { QuestionComponent } from '@/g_shared/ui/question_component';
import { useZodInputValidation } from '@/g_shared/lib/hooks';
import { z } from 'zod';
import { surveyScheme } from '@/f_entities/survey';

export const GrowthQuestion: FC<Props> = (props) => {
    const { inputValue: growth, handleInputChange } = useZodInputValidation(
        surveyScheme.shape.growth
    );
    const [validationError, setValidationError] = useState<string>('');

    const handleGrowthChange = (value: string) => {
        const growthValue = Number(value); // строку в число

        handleInputChange({
            target: { value },
        } as React.ChangeEvent<HTMLInputElement>);

        try {
            surveyScheme.shape.growth.parse(growthValue);
            setValidationError('');
            props.onAnswer(growthValue); // Передаем number
            if (props.onInputValidation) {
                props.onInputValidation(true);
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errorMessage = error.errors[0].message;
                setValidationError(errorMessage);
                if (props.onInputValidation) {
                    props.onInputValidation(false); // Устанавливаем неуспешный статус
                }
            }
        }
    };
    return (
        <QuestionComponent
            inputValue={growth ? growth.toString() : ''}
            onInputChange={handleGrowthChange}
            selectedAnswer={props.selectedAnswer ?? null}
            onAnswer={props.onAnswer}
            inputType='number'
            inputName='growth'
            inputId='growth'
            inputError={validationError}
        />
    );
};
