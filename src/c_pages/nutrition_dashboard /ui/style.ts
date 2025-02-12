import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    position: relative;
    top: -40px;
    text-align: center;
    align-items: center;
    @media (max-width: 1200px), (max-width: 768px), (max-width: 480px) {
        top: -5px;
    }
`;
export const DateNow = styled.div`
    font-size: 20px;
    @media (max-width: 768px), (max-width: 480px) {
        font-size: 15px;
    }
`;
