import { Button } from '@/g_shared/ui/button';
import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
`;

export const Header = styled.h1`
    font-weight: 200;
    font-size: 30px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 24px;
    }
    @media (max-width: 480px) {
        font-size: 20px;
    }
`;

export const BtnWrapper = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const Btn = styled(Link)`
    margin: 0 auto;
`;

export const ResponsiveButton = styled(Button)`
    width: auto;
    background-color: black;

    $btnWidth: 'l';
    $btnSquareSize: 'button--square--size-l';

    @media (max-width: 768px) {
        $btnWidth: 's';
        $btnSquareSize: 'button--square--size-s'; /
    }
`;
