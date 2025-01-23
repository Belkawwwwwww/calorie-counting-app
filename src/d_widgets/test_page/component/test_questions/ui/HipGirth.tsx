import { dataScheme } from '@/e_features/survey/model/createSurvey';
import { QuestionComponent } from '@/g_shared/components/question_component';
import { useZodInputValidation } from '@/g_shared/hooks';
import { FC, useState } from 'react';
import { z } from 'zod';

export const HipGirth: FC<Props> = (props) => {
    const { inputValue: hip_girth, handleInputChange } = useZodInputValidation(
        dataScheme.shape.hip_girth
    );
    const [validationError, setValidationError] = useState<string>('');

    const handleHipChange = (value: string) => {
        const hipValue = Number(value); // строку в число

        handleInputChange({
            target: { value },
        } as React.ChangeEvent<HTMLInputElement>);

        try {
            dataScheme.shape.hip_girth.parse(hipValue);
            setValidationError('');
            props.onAnswer(hipValue); // Передаем number
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
            inputValue={hip_girth ? hip_girth.toString() : ''}
            onInputChange={handleHipChange}
            selectedAnswer={props.selectedAnswer ?? null}
            onAnswer={props.onAnswer}
            inputType='number'
            inputName='hip_girth'
            inputId='hip_girth'
            inputError={validationError}
        />
    );
};