import { FC } from 'react';
import { Props } from '../type';
import { Btn, Container, Form, Title } from './style';

export const UIFormLayout: FC<Props> = (props) => {
    return (
        <Container>
            {props.header}
            <Form>
                <Title content={props.content}>{props.title}</Title>
                {props.form}
                <Btn>{props.nextButton}</Btn>
            </Form>
        </Container>
    );
};
