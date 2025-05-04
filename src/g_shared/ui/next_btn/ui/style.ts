import { Button } from '@/g_shared/ui/button';
import styled from 'styled-components';

export const ResponsiveButton = styled(Button)`
    width: 320px;
    background-color: var(--color-text2);
    $btnSquareSize: 'button--square--size-l';

    @media (max-width: 768px) {
        $btnWidth: 's';
        $btnSquareSize: 'button--square--size-s';
    }
    @media (max-width: 480px) {
        width: 100%;
        $btnWidth: 's';
        $btnSquareSize: 'button--square--size-s';
    }
`;
