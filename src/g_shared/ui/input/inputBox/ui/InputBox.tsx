import { forwardRef, memo } from 'react';
import { Input } from '../../input/ui/Input';
import { InputBoxProps } from '../type';
import {
    Error,
    InputContainer,
    Label,
    PlaceholderImage,
    StyledInputBox,
} from './style';
import { InputUnframed } from '../../input_unframed/ui/InputUnframed';


export const InputBox = memo(
    forwardRef<HTMLInputElement, InputBoxProps>(

        ({
            label,
            error,
            direction = 'column',
            value = '',
            imageSrc,
            useUnframedInput = false,
            id,
            type,
            alwaysShowPlaceholder,
            ...inputProps
        }, ref) => {
            const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
                event
            ) => {
                inputProps.onChange?.(event);
            };

            return (
                <StyledInputBox direction={direction}>
                    <InputContainer>
                        {useUnframedInput ? null : (
                            <Label htmlFor={id}>{label}</Label>
                        )}
                        {imageSrc ? (
                            <PlaceholderImage src={imageSrc} alt='placeholder' />
                        ) : null}
                        {useUnframedInput ? (
                            <InputUnframed
                                id={id ?? ''}
                                value={value}
                                label={label}
                                type={type}
                                {...inputProps}
                                onChange={handleInputChange}
                                alwaysShowPlaceholder={alwaysShowPlaceholder}
                            />
                        ) : (
                            <Input
                                id={id ?? ''}
                                value={value}
                                {...inputProps}
                                onChange={handleInputChange}
                            // ref={ref}
                            />
                        )}
                    </InputContainer>
                    {error ? <Error>{error}</Error> : null}
                </StyledInputBox>
            );
        }
    )
)

InputBox.displayName = 'InputBox';
