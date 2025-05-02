import { QuestionComponent } from '@/g_shared/ui/question_component';
import { useZodInputValidation } from '@/g_shared/lib/hooks';
import { FC, useState } from 'react';
import { z } from 'zod';
import { surveyScheme } from '@/f_entities/survey';

export const HipGirth: FC<Props> = (props) => {
    const { inputValue: hip_girth, handleInputChange } = useZodInputValidation(
        surveyScheme.shape.hip_girth
    );
    const [validationError, setValidationError] = useState<string>('');

    const handleHipChange = (value: string) => {
        const hipValue = Number(value); 

        handleInputChange({
            target: { value },
        } as React.ChangeEvent<HTMLInputElement>);

        try {
            surveyScheme.shape.hip_girth.parse(hipValue);
            setValidationError('');
            props.onAnswer(hipValue); 
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
