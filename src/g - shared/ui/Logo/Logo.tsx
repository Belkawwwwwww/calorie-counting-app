import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';

const StyledLogoLink = styled(Link)`
    color: black;
    text-decoration: none;
    padding-left: 6px;
    cursor: pointer;
`;
export const Logo = () => {
    return <StyledLogoLink href='/'>CC</StyledLogoLink>;
};
