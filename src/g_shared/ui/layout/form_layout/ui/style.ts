import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: 60px;
    height: 100vh;
`;
export const Form = styled.div``;
export const Title = styled.h1<{ content?: 'center' }>`
    display: flex;
    font-weight: 200;
    font-size: 30px;
    color: #000000;
    margin-bottom: 35px;
    ${({ content }) =>
        content &&
        `
        display: flex;
        justify-content: center;
    `}

    @media (max-width: 480px) {
        font-size: 20px;
    }
`;
export const Btn = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 24px;
`;
