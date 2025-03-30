import styled, { css } from 'styled-components';

interface StyledErrorProps {
    absolute?: boolean;
}

export const StyledError = styled.div<StyledErrorProps>`
    color: red;
    ${(props) =>
        props.absolute !== false &&
        css`
            position: absolute;
            margin-top: -20px;
        `}
`;
