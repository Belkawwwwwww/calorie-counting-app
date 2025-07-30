import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 400px;
    @media (max-width: 768px) {
        width: auto;
    }
    @media (max-width: 480px) {
        width: auto;
    }
`;
export const Btn = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;
export const PasswordRecovery = styled.div`
    margin-left: 20px;
    color: var(--color-text1);
    cursor: pointer;
`;
export const Footer = styled.div`
    display: flex;
    @media (max-width: 480px) {
        align-items: flex-start;
        flex-direction: column;
    }
`;
export const FooterRegister = styled.div`
    margin-left: 10px;
    display: flex;
`;
export const Text = styled.div``;
export const StyledLink = styled.div`
    color: var(--color-text1);
    text-decoration: none;
    padding-left: 6px;
    cursor: pointer;
    @media (max-width: 480px) {
        padding: 0;
    }
`;
