import styled from 'styled-components';
export const Menu = styled.div`
    background: linear-gradient(
        109.6deg,
        rgb(231, 230, 214) 11.2%,
        rgb(206, 240, 185) 47.5%,
        rgb(100, 163, 111) 100.2%
    );
    border-radius: 0 0 29px 29px;
    width: 100%;
    height: 270px;
    @media (max-width: 480px) {
        height: 150px;
    }
`;
export const StyledLink = styled.div`
    display: flex;
    padding-top: 30px;
    justify-content: end;
`;
export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`;
