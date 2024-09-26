import { dataScheme } from '@/d - widgets/TestPage/model/createSurvey';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import { useZodInputValidation } from '@/g - shared/hooks/useZodInputValidation';
import { FC } from 'react';

interface AgeProps {
    selectedAnswer?: number | null;
    onAnswer: (answer: string | number | Date) => void;
}

export const AgeQuestion: FC<AgeProps> = ({ selectedAnswer, onAnswer }) => {
    const { inputValue: age, handleInputChange } = useZodInputValidation(
        dataScheme.shape.age
    );
    const handleAgeChange = (value: string) => {
        const ageValue = Number(value); // строку в число
        handleInputChange({
            target: { value },
        } as React.ChangeEvent<HTMLInputElement>);
        onAnswer(ageValue); // Передаем number
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
        />
    );
};
