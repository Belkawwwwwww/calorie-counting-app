import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
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
