import React, { FC, useState } from "react";
import styled from "styled-components";
import { Button } from "@/g - shared/ui/Button";

interface GenderQuestionProps {
    selectedAnswer: string | null;
    onAnswer: (answer: string) => void;
    onNextQuestion: () => void;
}

const StyledGenderQuestion = styled.div``;

const StyledTitle = styled.h1`
  font-weight: 200;
  font-size: 30px;
  color: #000000;
  display: block;
  margin-bottom: 22px;
  text-align: center;
`;

const StyledGenders = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const StyledGender = styled.div<{ isSelected: boolean }>`
  width: 150px;
  height: 150px;
  border: 1px solid #89ac76;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.isSelected ? "#ebebeb" : "transparent")};

  &:hover {
    background-color: #ebebeb;
  }
`;

export const GenderQuestion: FC<GenderQuestionProps> = ({selectedAnswer, onAnswer, onNextQuestion}) => {
    const [selectedGender, setSelectedGender] = useState<string | null>(null);

    const handleGenderClick = (gender: string) => {
        setSelectedGender(gender);
        onAnswer(gender);
    };

    return (
        <StyledGenderQuestion>
            <StyledTitle>Какой у вас пол?</StyledTitle>
            <StyledGenders>
                <StyledGender
                    onClick={() => handleGenderClick("Женщина")}
                    isSelected={selectedGender === "Женщина"}
                >
                    женщина
                </StyledGender>
                <StyledGender
                    onClick={() => handleGenderClick("Мужчина")}
                    isSelected={selectedGender === "Мужчина"}
                >
                    мужчина
                </StyledGender>
            </StyledGenders>
            {selectedAnswer !== null && (
                <Button
                    $variant="primary"
                    $btnWidth="m"
                    $btnSquareSize="button--square--size-m"
                    onClick={onNextQuestion}
                >
                    Следующий вопрос
                </Button>
            )}
        </StyledGenderQuestion>
    );
};