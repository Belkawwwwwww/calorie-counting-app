import styled from 'styled-components';
import React, { FC } from 'react';
import { InputBox } from '@/g - shared/ui/Input/InputBox/InputBox';

interface QuestionComponentProps {
    title?: string;
    options?: string[];
    selectedAnswer: string | number | Date | null;
    onAnswer?: (answer: string | number | Date) => void;
    // onNextQuestion?: () => void;
    inputValue?: string;
    inputId?: string;
    inputType?: string;
    inputName?: string;
    inputError?: string;
    onInputChange?: (value: string) => void;
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
    background-color: ${(props) =>
        props.isSelected ? '#ebebeb' : 'transparent'};
    text-align: center;
    &:hover {
        background-color: #ebebeb;
    }
`;
const StyledBtn = styled.div`
    &:hover {
        opacity: 1;
    }
    &:disabled {
        background-color: #cccccc; // Серый цвет для отключенной кнопки
        cursor: not-allowed;
    }
`;

export const QuestionComponent: FC<QuestionComponentProps> = ({
    title,
    options,
    selectedAnswer,
    inputValue,
    onInputChange,
    inputId,
    inputName,
    inputType,
    inputError,
    customOption: CustomOption = StyledOption,
    onAnswer,
    // onNextQuestion
}) => {
    const handleOptionClick = (option: string) => {
        onAnswer?.(option);
    };
    // const isNextBtnActive = options ? selectedAnswer !== null : inputValue !== '' && !inputError;
    // const isNextQuestionAvailable = !!onNextQuestion;

    return (
        <StyledContainer>
            <StyledTitle>{title}</StyledTitle>
            {options ? (
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
                </>
            ) : (
                <InputBox
                    id={inputId}
                    type={inputType}
                    name={inputName}
                    error={inputError}
                    value={inputValue || ''}
                    onChange={(event) => onInputChange?.(event.target.value)}
                />
            )}
            {/* <StyledBtn>
                <Button
                    $variant='primary'
                    $btnWidth='m'
                    $btnSquareSize='button--square--size-m'
                    type='submit'
                    disabled={!isNextBtnActive}
                >
                    Следующий вопрос
                </Button>
            </StyledBtn> */}
        </StyledContainer>
    );
};
