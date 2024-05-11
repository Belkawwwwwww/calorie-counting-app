import styled from "styled-components";
import {Button} from "@/g - shared/ui/Button";
import {FC} from "react";

interface QuestionComponentProps {
    title: string;
    options?: string[];
    selectedAnswer: string | null;
    onAnswer: (answer: string) => void;
    onNextQuestion: () => void;
    customOption?: React.ComponentType<{ isSelected: boolean }>;

}

const StyledContainer = styled.div``;

const StyledTitle = styled.h1`
  font-weight: 200;
  font-size: 30px;
  color: #000000;
  display: block;
  margin-bottom: 22px;
  text-align: center;
`;

const StyledOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const StyledOption = styled.div<{ isSelected: boolean }>`
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

export const QuestionComponent: FC<QuestionComponentProps> = ({title, options, selectedAnswer, onAnswer, onNextQuestion, customOption: CustomOption = StyledOption}) => {
    const handleOptionClick = (option: string) => {
        onAnswer(option);
    };

    return (
        <StyledContainer>
            <StyledTitle>{title}</StyledTitle>
            {options && (
                <>
                    <StyledOptions>
                        {options.map((option) => (
                            <CustomOption
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                isSelected={selectedAnswer === option}
                            >
                                {option}
                            </CustomOption>
                        ))}
                    </StyledOptions>
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
                </>
            )}
        </StyledContainer>
    );
};