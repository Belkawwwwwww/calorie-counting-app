import styled from 'styled-components';

export const StyledInputBox = styled.div<{ direction: 'column' | 'row' }>`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'column'};
    margin-bottom: 10px;
    box-sizing: border-box;
`;

export const Error = styled.div`
    color: red;
`;
export const InputContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const PlaceholderImage = styled.img`
    position: absolute;
    right: 20px;
    top: 54%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
`;
export const Label = styled.label`
    font-size: 14px;
    color: var(--color-text1);
    margin-top: 20px;
`;