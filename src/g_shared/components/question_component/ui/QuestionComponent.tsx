import { FC, useState } from 'react';
import { InputBox } from '@/g_shared/ui/input';
import { z } from 'zod';
import { Props } from '../type';
import { Container, Option, Options, Title } from '../style';

export const QuestionComponent: FC<Props> = (props) => {
    const [validationError, setValidationError] = useState<string>('');
    const handleInputChange = (value: string) => {
        if (props.validationSchema) {
            try {
                const parsedValue =
                    props.inputType === 'number' ? Number(value) : value;
                props.validationSchema.parse(parsedValue); // Проверка схемы
                setValidationError(''); // Ошибки нет
                props.onValidValue?.(parsedValue); // Успешная валидация
            } catch (error) {
                if (error instanceof z.ZodError) {
                    setValidationError(error.errors[0].message); // Сохраняем ошибку
                }
            }
        }
        props.onInputChange?.(value); // Передаём родительскому компоненту результат
    };

    const handleOptionClick = (option: string | number) => {
        props.onAnswer?.(option);
    };

    return (
        <Container>
            <Title>{props.title}</Title>
            {props.options ? (
                <Options>
                    {props.options.map((option) => (
                        <Option
                            key={option.value}
                            onClick={() => handleOptionClick(option.value)}
                            isSelected={props.selectedAnswer === option.value}
                        >
                            {option.label}
                        </Option>
                    ))}
                </Options>
            ) : (
                <InputBox
                    id={props.inputId}
                    type={props.inputType}
                    name={props.inputName}
                    error={props.inputError || validationError}
                    value={props.inputValue}
                    onChange={(event) => handleInputChange(event.target.value)}
                    style={{ width: '320px' }}
                />
            )}
        </Container>
    );
};
