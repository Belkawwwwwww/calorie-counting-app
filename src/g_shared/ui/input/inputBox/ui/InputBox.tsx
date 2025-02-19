import { FC } from 'react';
import { Input } from '../../input/ui/Input';
import { InputBoxProps } from '../type';
import {
    Error,
    InputContainer,
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
                {imageSrc && (
                    <PlaceholderImage src={imageSrc} alt='placeholder' />
                )}{' '}
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
