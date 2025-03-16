import { Container, InputField, Label, Placeholder } from './style';
import { Props } from '../type';
import { FC, memo } from 'react';

export const InputUnframed: FC<Props> = memo((props) => {
    return (
        <Container
            onClick={() =>
                (document.getElementById(props.id) as HTMLInputElement).focus()
            }
        >
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
