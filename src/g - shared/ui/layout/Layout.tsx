import styled from "styled-components";
import {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
}

const StyledContainer = styled.div`
  margin-left: 100px;
  margin-right: 100px;
`
export const Layout = (props: LayoutProps) => {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}