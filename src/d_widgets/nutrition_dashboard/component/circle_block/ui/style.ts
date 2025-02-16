import styled from 'styled-components';

export const Circle = styled.div<{ $isOverkill?: boolean }>`
    border: ${({ $isOverkill }) => ($isOverkill ? '#b56d5b' : '#f0f0f0')} solid
        5px;
    border-radius: 50%;
    padding: 13px 20px;
    text-align: center;
    width: 125px;
    height: 125px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 480px) {
        width: 100px;
        height: 100px;
    }
`;

export const Text = styled.div<{ $isOverkill?: boolean }>`
    font-size: 11px;
    color: ${({ $isOverkill }) => ($isOverkill ? '#b56d5b' : 'inherit')};
`;

export const Significance = styled.div<{ $isOverkill?: boolean }>`
    font-size: 30px;
    font-weight: bold;
    color: ${({ $isOverkill }) => ($isOverkill ? '#b56d5b' : 'inherit')};
    @media (max-width: 480px) {
        font-size: 25px;
    }
`;
