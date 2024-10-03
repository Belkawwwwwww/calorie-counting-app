import styled from 'styled-components';
import React, { FC, useState } from 'react';
import { InputBox } from '@/g - shared/ui/Input/InputBox/InputBox';
import { z, ZodSchema } from 'zod';

interface QuestionComponentProps {
    title?: string;
    options?: string[];
    selectedAnswer: string | number | Date | null;
    onAnswer?: (answer: string | number | Date) => void;
    inputValue?: string;
    inputId?: string;
    inputType?: string;
    inputName?: string;
    inputError?: string;
    onInputChange?: (value: string) => void;
    customOption?: React.ComponentType<{ isSelected: boolean }>;
    validationSchema?: ZodSchema;
    onValidValue?: (value: string | number | Date) => void
}

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
    validationSchema,
    onValidValue,

    
}) => {
    const [validationError, setValidationError] = useState<string>(''); 
    const handleInputChange = (value: string) => {
        if (validationSchema) {
            try {
                const parsedValue = inputType === 'number' ? Number(value) : value;
                validationSchema.parse(parsedValue); // Проверка схемы
                setValidationError(''); // Ошибки нет
                onValidValue?.(parsedValue); // Успешная валидация
            } catch (error) {
                if (error instanceof z.ZodError) {
                    setValidationError(error.errors[0].message); // Сохраняем ошибку
                }
            }
        }
        onInputChange?.(value); // Передаём родительскому компоненту результат
    };

    const handleOptionClick = (option: string) => {
        onAnswer?.(option);
    };

    return (
        <>
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
                    error={inputError || validationError}
                    value={inputValue || ''}
                    onChange={(event) => handleInputChange(event.target.value)}
                />
            )}
        </>
    );
};
