import { dataScheme } from '@/d - widgets/TestPage/model/createSurvey';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import { useZodInputValidation } from '@/g - shared/hooks/useZodInputValidation';
import { FC, useState } from 'react';
import { z } from 'zod';

export const AgeQuestion: FC<TestQuestionProps> = ({
    selectedAnswer,
    onAnswer,
}) => {
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
            onAnswer(ageValue); // Передаем number
        } catch (error) {
            if (error instanceof z.ZodError) {
                setValidationError(error.errors[0].message);
            }
        }
    };

    return (
        <QuestionComponent
            inputValue={age ? age.toString() : ''}
            onInputChange={handleAgeChange}
            onAnswer={onAnswer}
            inputType='number'
            inputName='age'
            inputId='age'
            selectedAnswer={selectedAnswer ?? null}
            inputError={validationError}
        />
    );
};
