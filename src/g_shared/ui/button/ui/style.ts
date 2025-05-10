import styled from 'styled-components';
import { Props } from '../type/types';

export const StyledButton = styled.button<Props>`
    padding: 15px 30px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    background-color: ${(props) => {
        switch (props.$variant) {
            case 'primary':
                return 'var(--color-text2)';
            case 'secondary':
                return 'var(--color-text1)';
            case 'green':
                return 'var(--color-text4)'
            default:
                return 'gray';
        }
    }};
    font-size: ${(props) => {
        switch (props.$btnSquareSize) {
            case 'button--square--size-s':
                return '14px';
            case 'button--square--size-m':
                return '16px';
            case 'button--square--size-l':
                return '16px';
            default:
                return '16px';
        }
    }};
    width: ${(props) => {
        switch (props.$btnWidth) {
            case 'xs':
                return '120px';
            case 's':
                return '150px';
            case 'm':
                return '232px';
            case 'l':
                return '400px';
            default:
                return '14px';
        }
    }};
     @media (max-width: 768px) {
        /* margin-left: 115px; */
    }
    @media (max-width: 480px) {
        width: 100%;
        
    }
    @media (max-width: 320px) {
        width: 100%;
        margin-right: 25px;
    }
`;
