import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin-top: 60px;
    height: 100vh;
`;
const Form = styled.div`
    width: 450px;
`;
const Title = styled.h1<{ content?: 'center' }>`
    display: flex;
    font-weight: 200;
    font-size: 30px;
    color: #000000;
    margin-bottom: 22px;
    ${({ content }) =>
        content &&
        `
        display: flex;
        justify-content: center;
    `}
`;
const Btn = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 24px;
`;

type Props = {
    header?: ReactNode;
    form?: ReactNode;
    title: string;
    content?: 'center';
    nextButton?: ReactNode;
};
export const UIFormLayout: FC<Props> = ({
    header,
    form,
    title,
    content,
    nextButton,
}) => {
    return (
        <Container>
            {header}
            <Form>
                <Title content={content}>{title}</Title>
                {form}
                <Btn>{nextButton}</Btn>
            </Form>
        </Container>
    );
};
