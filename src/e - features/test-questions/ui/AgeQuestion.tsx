import { dataScheme } from '@/d - widgets/test-page';
import { QuestionComponent } from '@/g - shared/components/question-component';
import { useZodInputValidation } from '@/g - shared/hooks';
import { FC, useState } from 'react';
import { z } from 'zod';

export const AgeQuestion: FC<Props> = (props) => {
    const { inputValue: age, handleInputChange } = useZodInputValidation(
        dataScheme.shape.age
    );
    const [validationError, setValidationError] = useState<string>('');

    const handleAgeChange = (value: string) => {
        const ageValue = Number(value); // строку в число
        handleInputChange({
            target: { value },
        } as React.ChangeEvent<HTMLInputElement>);

        try {
            dataScheme.shape.age.parse(ageValue); // проверка значения возраста
            setValidationError('');
            props.onAnswer(ageValue); // Передаем number
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
            inputValue={age ? age.toString() : ''}
            onInputChange={handleAgeChange}
            onAnswer={props.onAnswer}
            inputType='number'
            inputName='age'
            inputId='age'
            selectedAnswer={props.selectedAnswer ?? null}
            inputError={validationError}
        />
    );
};
