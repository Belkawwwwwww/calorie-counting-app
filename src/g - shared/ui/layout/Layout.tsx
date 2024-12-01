import styled from 'styled-components';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

const StyledContainer = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    height: 100vh;
`;
export const Layout = (props: Props) => {
    return <StyledContainer>{props.children}</StyledContainer>;
};
