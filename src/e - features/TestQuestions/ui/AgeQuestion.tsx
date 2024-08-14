import { dataScheme } from '@/d - widgets/TestPage/model/createSurvey';
import { QuestionComponent } from '@/g - shared/components/question-component/QuestionComponent';
import { useZodInputValidation } from '@/g - shared/hooks/useZodInputValidation';
import { FC } from 'react';

interface AgeProps {
    selectedAnswer?: string | null | undefined;
    onAnswer: (answer: string) => void;
}

export const AgeQuestion: FC<AgeProps> = ({ selectedAnswer, onAnswer }) => {
    const { inputValue: age, handleInputChange } =
        useZodInputValidation(dataScheme.shape.age);
    const handleAgeChange = (value: string) => {
        handleInputChange({
            target: { value },
        } as React.ChangeEvent<HTMLInputElement>);
    };

    return (
        <QuestionComponent
            inputValue={age.toString()}
            onInputChange={handleAgeChange}
            onAnswer={onAnswer}
            // onNextQuestion={handleNextQuestion}
            inputType='age'
            inputName='age'
            inputId='age'
            selectedAnswer={selectedAnswer ?? null}
        />
    );
};
