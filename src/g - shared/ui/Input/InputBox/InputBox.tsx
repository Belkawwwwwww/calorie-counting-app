import { FC } from 'react';
import styled from 'styled-components';
import { Props } from '../types';
import { Input } from '../Input';

type InputBoxProps=  {
    label?: string;
    error?: string;
    direction?: 'column' | 'row';
} & Props

const StyledInputBox = styled.div<{ direction: 'column' | 'row' }>`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'column'};
    margin-bottom: 10px;
    box-sizing: border-box;
`;

const Label = styled.label`
    font-size: 14px;
    color: var(--color-text1);
    margin-top: 20px;
`;

const Error = styled.div`
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
            <Label htmlFor={inputProps.id}>{label}</Label>
            <Input {...inputProps} onChange={handleInputChange} />
            {error ? <Error>{error}</Error> : null}
        </StyledInputBox>
    );
};
