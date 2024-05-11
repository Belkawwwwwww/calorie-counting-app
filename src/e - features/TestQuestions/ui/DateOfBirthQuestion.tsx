import React, {FC, useState} from "react";
import styled from "styled-components";
import {QuestionComponent} from "@/g - shared/components/question-component/QuestionComponent";
import {InputWithRules} from "@/e - features/input-with-rules";
import {Button} from "@/g - shared/ui/Button";

interface DateOfBirthQuestionProps {
    onAnswer: (answer: string) => void;
    onNextQuestion: () => void;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;


export const DateOfBirthQuestion: FC<DateOfBirthQuestionProps> = ({
                                                                      onAnswer, onNextQuestion,
                                                                  }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        onAnswer(inputValue);
        onNextQuestion();
    };

    const isDateInPast = (value: string): boolean => {
        const date = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Установить время на начало дня (00:00:00)
        return date < today;
    };

    return (
        <>
            <QuestionComponent
                title="Укажите дату рождения?"
                selectedAnswer={null}
                onAnswer={() => {
                }}
                onNextQuestion={onNextQuestion}
            />
            <StyledContainer>
                <InputWithRules
                    onChange={handleInputChange}
                    value={inputValue}
                    rules={[(value: string) => isDateInPast(value)]}
                    placeholder="Введите дату рождения"
                    text="Введите корректную дату рождения"
                    type="date"
                    required
                />
                {inputValue && (
                    <Button
                        $variant="primary"
                        $btnWidth="m"
                        $btnSquareSize="button--square--size-m"
                        onClick={handleSubmit}
                    >
                        Следующий вопрос
                    </Button>
                )}
            </StyledContainer>
        </>
    );
};