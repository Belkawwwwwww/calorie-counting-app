import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    margin-top: 60px;
    height: 100vh;
`;
const StyledLFForm = styled.div`
    width: 450px;
`;
const StyledLFTitle = styled.h1<{ content?: 'center' }>`
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
const StyledBtn = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 24px;
`;

interface UIFormLayoutProps {
    header?: ReactNode;
    form?: ReactNode;
    title: string;
    content?: 'center';
    nextButton?: ReactNode;
}
export const UIFormLayout: FC<UIFormLayoutProps> = ({
    header,
    form,
    title,
    content,
    nextButton,
}) => {
    return (
        <StyledContainer>
            {header}
            <StyledLFForm>
                <StyledLFTitle content={content}>{title}</StyledLFTitle>
                {form}
                <StyledBtn>{nextButton}</StyledBtn>
            </StyledLFForm>
        </StyledContainer>
    );
};
