import { Container, InputField, Label, Placeholder } from './style';
import { Props } from '../type';
import { FC, memo } from 'react';

export const InputUnframed: FC<Props> = memo((props) => {
    const handleFocus = () => {
        const inputElement = document.getElementById(
            props.id
        ) as HTMLInputElement;
        if (inputElement) {
            inputElement.focus();
        } else {
            console.log(`Элемент ${props.id} нет`);
        }
    };
    return (
        <Container onClick={handleFocus}>
            {props.label && <Label>{props.label}</Label>}
            <InputField
                id={props.id}
                value={props.value}
                onChange={props.onChange}
            />
            {!props.value && <Placeholder>{props.placeholder}</Placeholder>}
        </Container>
    );
});
