import Link from 'next/link';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
    color: black;
    text-decoration: none;
    padding-left: 6px;
    cursor: pointer;
    @media (max-width: 480px) {
        font-size: 10px;
    }
`;
