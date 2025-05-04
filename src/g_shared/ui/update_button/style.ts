import styled from 'styled-components';
import { Button } from '@/g_shared/ui/button';
import Link from 'next/link';

export const BtnTest = styled(Link)`
    text-decoration: none;
    position: relative;
    padding-right: 10px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        display: flex;
        left: 0;
        top: -5px;
    }
    @media (max-width: 480px) {
        display: flex;
        left: 18px;
        top: 0px;
    }
`;
export const ResponsiveButton = styled(Button)`
    width: 201px;
    background-color: var(--color-text2);
    $btnWidth: 'l';
    $btnSquareSize: 'button--square--size-l';
    @media (max-width: 768px) {
        $btnWidth: 'xs';
        $btnSquareSize: 'button--square--size-s';
        padding: 14px 19px 15px 25px;
        width: 150px;
        height: 40px;
        font-size: 11px;
        display: flex;
        left: 10px;
    }
    @media (max-width: 480px) {
        $btnWidth: 'xs';
        $btnSquareSize: 'button--square--size-s';
        padding: 8px 16px;
        width: 100px;
        height: 40px;
        font-size: 11px;
        display: flex;
        left: 10px;
    }
`;
