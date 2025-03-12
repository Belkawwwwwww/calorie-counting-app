import { FC } from 'react';
import { Input } from '../../input/ui/Input';
import { InputBoxProps } from '../type';
import {
    Error,
    InputContainer,
    Label,
    PlaceholderImage,
    StyledInputBox,
} from './style';

export const InputBox: FC<InputBoxProps> = ({
    label,
    error,
    direction = 'column',
    value = '',
    imageSrc,
    ...inputProps
}) => {
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        inputProps.onChange?.(event);
    };

    return (
        <StyledInputBox direction={direction}>
            <InputContainer>
                <Label htmlFor={inputProps.id}>{label}</Label>

                {imageSrc ? (
                    <PlaceholderImage src={imageSrc} alt='placeholder' />
                ) : null}
                <Input
                    value={value}
                    {...inputProps}
                    onChange={handleInputChange}
                />
            </InputContainer>
            {error ? <Error>{error}</Error> : null}
        </StyledInputBox>
    );
};
