import styled from 'styled-components';

export const Header = styled.header`
    position: relative;
    border-bottom: 1px solid var(--color-text3);
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 88px;
    padding-left: 100px;
    padding-right: 100px;

    @media (max-width: 1200px) {
        padding-left: 47px;
        padding-right: 80px;
    }
    @media (max-width: 768px) {
        padding-left: 40px;
        padding-right: 40px;
        height: 70px;
        width: 100%;
    }
    @media (max-width: 480px) {
        padding-left: 20px;
        padding-right: 20px;
        height: 56px;
        width: 100%;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
`;
