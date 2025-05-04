import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin-bottom: 16px;
`;

export const InputField = styled.input`
    border: none;
    border-bottom: 1px solid var(--color-text3);
    padding: 8px 0;
    padding-left: 219px;
    width: 100%;
    font-size: 16px;
    outline: none;
    color: black;
`;

export const Label = styled.label`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 13px;
    color: black;
`;

export const Placeholder = styled.span`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    color: #999;
`;
