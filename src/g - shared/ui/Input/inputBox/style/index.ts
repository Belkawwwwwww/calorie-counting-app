import styled from 'styled-components';

export const StyledInputBox = styled.div<{ direction: 'column' | 'row' }>`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'column'};
    margin-bottom: 10px;
    box-sizing: border-box;
`;

export const Label = styled.label`
    font-size: 14px;
    color: var(--color-text1);
    margin-top: 20px;
`;

export const Error = styled.div`
    color: red;
`;
