import styled from 'styled-components';

export const Circle = styled.div<{ $isOverkill?: boolean }>`
    border: ${({ $isOverkill }) => ($isOverkill ? '#b56d5b' : 'var(--color-text2)')} solid
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
export const BoxCircle = styled.div`
    flex: 0 0 33.3%;
    padding-left: 24px;
    @media (max-width: 480px) {
        padding-left: 20px;
    }
    @media (max-width: 320px) {
        padding-left: 17px;
    }
`;
