import styled from 'styled-components';

export const StyledInputBox = styled.div<{ direction: 'column' | 'row' }>`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'column'};
    margin-bottom: 10px;
    box-sizing: border-box;
`;

export const Error = styled.div`
    color: var(--color-background4);
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
    font-weight: 200;
    margin-top: 20px;
`;