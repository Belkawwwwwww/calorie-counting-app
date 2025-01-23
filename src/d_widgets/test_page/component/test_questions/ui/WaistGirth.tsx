import { dataScheme } from '@/e_features/survey/model/createSurvey';
import { QuestionComponent } from '@/g_shared/components/question_component';
import { useZodInputValidation } from '@/g_shared/hooks';
import { FC, useState } from 'react';
import { z } from 'zod';

export const WaistGirth: FC<Props> = (props) => {
    const { inputValue: waist_girth, handleInputChange } =
        useZodInputValidation(dataScheme.shape.waist_girth);
    const [validationError, setValidationError] = useState<string>('');

    const handleWaistChange = (value: string) => {
        const waistValue = Number(value); // строку в число

        handleInputChange({
            target: { value },
        } as React.ChangeEvent<HTMLInputElement>);
        console.log(value);
        try {
            dataScheme.shape.waist_girth.parse(waistValue);
            setValidationError('');
            console.log('Before answering:', waistValue);
            props.onAnswer(waistValue); // Передаем number
            console.log('Before answering:', waistValue);
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
            inputValue={waist_girth ? waist_girth?.toString() : ''}
            onInputChange={handleWaistChange}
            selectedAnswer={props.selectedAnswer ?? null}
            onAnswer={props.onAnswer}
            inputType='number'
            inputName='waist_girth'
            inputId='waist_girth'
            inputError={validationError}
        />
    );
};
