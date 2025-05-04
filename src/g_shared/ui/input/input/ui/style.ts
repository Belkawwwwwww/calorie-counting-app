import styled from 'styled-components';

export const StyledInput = styled.input`
    border: 1px solid var(--color-text3);
    border-radius: 4px;
    padding: 14px 20px;
    outline: none;
    font-size: 17px;
    margin-top: 15px;
    margin-bottom: 8px;
    width: 100%;

    &::placeholder {
        text-align: right;
        font-size: 14px;
        opacity: 0.7;
        color: var(--color-text4);
    }
`;