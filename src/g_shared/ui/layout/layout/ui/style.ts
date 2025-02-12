import styled from 'styled-components';

export const Container = styled.div`
    margin: 60px 100px 0;
    height: 100vh;
    padding: 0;

    @media (max-width: 1200px) {
        margin: 30px 50px 0;
    }
    @media (max-width: 768px) {
        margin: 20px;
    }

    @media (max-width: 480px) {
        margin: 20px;
        height: auto;
    }
`;
