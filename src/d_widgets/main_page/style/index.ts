import { Button } from '@/g_shared/ui/button';
import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    position: relative;
    top: -40px;
    text-align: center;
    align-items: center;
    @media (max-width: 1200px), (max-width: 768px), (max-width: 480px) {
        top: -5px;
    }
`;
export const DateNow = styled.div`
    font-size: 20px;
    @media (max-width: 768px), (max-width: 480px) {
        font-size: 15px;
    }
`;
export const Message = styled.div`
    margin: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Text = styled.div`
    font-size: 25px;
    padding-bottom: 50px;
    @media (max-width: 480px) {
        font-size: 15px;
        padding-bottom: 20px;
    }
`;
export const Btn = styled(Link)`
    margin: 0 auto;
    margin-top: 20px;
`;

export const ResponsiveButton = styled(Button)`
    width: auto;
    background-color: #89AC76;

    $btnWidth: 'l';
    $btnSquareSize: 'button--square--size-l';

    @media (max-width: 768px) {
        $btnWidth: 's';
        $btnSquareSize: 'button--square--size-s'; /
    }
`;
