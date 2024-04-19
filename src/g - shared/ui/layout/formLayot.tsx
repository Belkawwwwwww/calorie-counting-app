import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledLFForm = styled.form`
    width: 450px;
`;
const StyledLFTitle = styled.h1`
  font-weight: 200;
  font-size: 30px;
  color: #000000;
  display: block;
  margin-bottom: 22px;
  text-align: center;
`

export default function UIFormLayout({
    header,
    form,
    title,
}: {
    header?: ReactNode;
    form?: ReactNode;
    title: string;
}) {
    return (
        <>
            {header}
            <StyledLFForm>
                <StyledLFTitle>
                    {title}
                </StyledLFTitle>
                {form}
            </StyledLFForm>
        </>
    );
}
