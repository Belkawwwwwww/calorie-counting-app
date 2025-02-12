import { FC } from 'react';
import { Input } from '../../input/ui/Input';
import { InputBoxProps } from '../type';
import { Error, Label, StyledInputBox } from './style';

export const InputBox: FC<InputBoxProps> = ({
    label,
    error,
    direction = 'column',
    value = '',
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
            <Input value={value} {...inputProps} onChange={handleInputChange} />
            {error ? <Error>{error}</Error> : null}
        </StyledInputBox>
    );
};
