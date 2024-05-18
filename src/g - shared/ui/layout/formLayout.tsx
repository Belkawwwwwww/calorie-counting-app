import {FC, ReactNode} from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    margin-top: 60px;
    height: 100vh;
`;
const StyledLFForm = styled.div`
    width: 450px;
`;
const StyledLFTitle = styled.h1`
    font-weight: 200;
    font-size: 30px;
    color: #000000;
    display: block;
    margin-bottom: 22px;
`;
interface UIFormLayoutProps {
    header?: ReactNode;
    form?: ReactNode;
    title: string;
}
export const UIFormLayout: FC<UIFormLayoutProps> = ({header, form, title}) => {
    return (
        <StyledContainer>
            {header}
            <StyledLFForm>
                <StyledLFTitle>{title}</StyledLFTitle>
                {form}
            </StyledLFForm>
        </StyledContainer>
    );
}
