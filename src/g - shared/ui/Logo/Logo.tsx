import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';

const LogoLink = styled(Link)`
    color: black;
    text-decoration: none;
    padding-left: 6px;
    cursor: pointer;
`;
export const Logo = () => {
    return <LogoLink href='/'>CC</LogoLink>;
};
