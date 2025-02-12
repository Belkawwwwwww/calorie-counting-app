import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    flex-direction: column;
    position: relative;
`;
export const Title = styled.h1`
    font-weight: 200;
    font-size: 18px;

    @media (max-width: 480px) {
        font-size: 15px;
    }
`;
