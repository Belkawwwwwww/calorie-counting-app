import { Button } from '@/g_shared/ui/button';
import Link from 'next/link';
import styled from 'styled-components';

export const Messages = styled.div`
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
    background-color: var(--color-background6);

    $btnWidth: 'l';
    $btnSquareSize: 'button--square--size-l';

    @media (max-width: 768px) {
        $btnWidth: 's';
        $btnSquareSize: 'button--square--size-s'; /
    }
`;
