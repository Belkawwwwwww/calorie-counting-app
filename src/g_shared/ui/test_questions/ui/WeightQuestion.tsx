import React, { FC, useState } from 'react';
import { QuestionComponent } from '@/g_shared/ui/question_component';
import { useZodInputValidation } from '@/g_shared/lib/hooks';
import { z } from 'zod';
import { surveyScheme } from '@/f_entities/survey';

export const WeightQuestion: FC<Props> = (props) => {
    const { inputValue: weight, handleInputChange } = useZodInputValidation(
        surveyScheme.shape.weight
    );
    const [validationError, setValidationError] = useState<string>('');

    const handleWeightChange = (value: string) => {
        const weightValue = Number(value); 

        handleInputChange({
            target: { value },
        } as React.ChangeEvent<HTMLInputElement>);

        try {
            surveyScheme.shape.weight.parse(weightValue);
            setValidationError('');
            props.onAnswer(weightValue); 
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
            inputValue={weight ? weight.toString() : ''}
            onInputChange={handleWeightChange}
            onAnswer={props.onAnswer}
            inputType='number'
            inputName='weight'
            inputId='weight'
            selectedAnswer={props.selectedAnswer ?? null}
            inputError={validationError}
        />
    );
};
