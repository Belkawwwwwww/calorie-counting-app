import { FC } from 'react';
import { IInputProps } from '../types';
import { Input } from '../Input';
import styled from 'styled-components';

interface InputBoxProps extends IInputProps {
    label?: string;
    error?: string;
    direction?: 'column' | 'row';
}

const StyledInputBox = styled.div<{ direction: 'column' | 'row' }>`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'column'};
    margin-bottom: 10px;
    box-sizing: border-box;
`;

const StyledLabel = styled.label`
    font-size: 14px;
    color: var(--color-text1);
    margin-top: 20px;
`;

const StyledError = styled.div`
    color: red;
`;

export const InputBox: FC<InputBoxProps> = ({
    label,
    error,
    direction = 'column',
    ...inputProps
}) => {
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        inputProps.onChange?.(event);
    };

    return (
        <StyledInputBox direction={direction}>
            <StyledLabel htmlFor={inputProps.id}>{label}</StyledLabel>
            <Input {...inputProps} onChange={handleInputChange} />
            {error ? <StyledError>{error}</StyledError> : null}
        </StyledInputBox>
    );
};
