import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 400px;
`;
export const Btn = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;
export const PasswordRecovery = styled.div`
    margin-left: 20px;
    color: #4689e8;
    cursor: pointer;
`;
export const Footer = styled.div`
    display: flex;
    @media (max-width: 480px) {
        align-items: flex-start;
        flex-direction: column;
    }
`;
export const Text = styled.div``;
export const StyledLink = styled(Link)`
    color: #4689e8;
    text-decoration: none;
    padding-left: 6px;
    @media (max-width: 480px) {
        padding: 0;
    }
`;
