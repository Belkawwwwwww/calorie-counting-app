import styled from 'styled-components';
export const Menu = styled.div`
    background-color: var(--color-text3);
    width: 100%;
    height: 88px;
    @media (max-width: 480px) {
        height: 55px;
    }
`;
export const StyledLink = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
    margin-right: 68px;
    @media (max-width: 1200px) {
        margin-right: 18px;
    }
    @media (max-width: 768px) {
        margin-right: 18px;
    }

    @media (max-width: 480px) {
    }

`;
export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`;
