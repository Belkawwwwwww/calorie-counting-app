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

export const Footer = styled.div`
    margin-left: 10px;
    display: flex;
`;
export const StyledLink = styled(Link)`
    color: #4689e8;
    text-decoration: none;
    padding-left: 6px;
`;
