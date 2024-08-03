import React, {FC} from 'react';
import {QuestionComponent} from '@/g - shared/components/question-component/QuestionComponent';
import styled from 'styled-components';
import {InputWithRules} from '@/e - features/input-with-rules';
import {useInputValidation} from '@/e - features/TestQuestions/lib';

interface WeightQuestionProps {
    onAnswer: (answer: string) => void;
    onNextQuestion: () => void;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const WeightQuestion: FC<WeightQuestionProps> = ({
                                                            onAnswer,
                                                            onNextQuestion,
                                                        }) => {
    const validationRegex = /^[1-9]\d*$/;

    const {inputValue, isInputValid, handleInputChange} =
        useInputValidation(validationRegex);

    const handleSubmit = () => {
        if (isInputValid) {
            onAnswer(inputValue);
            onNextQuestion();
        }
    };

    return (
        <>
            <QuestionComponent
                title="Какой у вас вес?"
                selectedAnswer={null}
                onAnswer={() => {
                }}
                onNextQuestion={onNextQuestion}
            />
            <StyledContainer>
                <InputWithRules
                    onChange={handleInputChange}
                    value={inputValue}
                    rules={/^[1-9]\d*$/}
                    placeholder="Введите рост в см"
                    text="Введите корректное число"
                    required
                />
                {/* {inputValue ? (
                    <Button
                        $variant="primary"
                        $btnWidth="m"
                        $btnSquareSize="button--square--size-m"
                        onClick={handleSubmit}
                    >
                        Следующий вопрос
                    </Button>
                ): null} */}
            </StyledContainer>
        </>
    );
};
