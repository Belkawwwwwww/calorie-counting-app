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
export const Opportunities = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid var(--color-background1);
    justify-content: space-between;
    @media (max-width: 480px) {
        padding-top: 20px;
    }
`;

export const Counter = styled.div`
    flex: 0 1 calc(25% - 15px);
    text-align: center;
    padding-right: 15px;
    margin-bottom: 20px;

    &:last-child {
        padding-right: 0;
    }
    @media (max-width: 768px) {
        flex: 0 1 100%;
    }
    @media (max-width: 480px) {
        flex: 0 1 100%;
        padding-right: 0px;
    }
`;

export const H1 = styled.h1`
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Text = styled.div``;

type Props = {
    src: string;
};

export const Img = styled.div<Props>`
    width: 100%;
    height: 150px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        width: 727px;
        height: 400px;
    }
    @media (max-width: 480px) {
        width: 100%;
        height: 144px;
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
