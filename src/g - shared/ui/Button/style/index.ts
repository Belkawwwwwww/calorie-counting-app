import styled from 'styled-components';
import { Props } from '../type/types';

export const StyledButton = styled.button<Props>`
    padding: 15px 30px;
    border-radius: 10px;
    border: none;
    color: white;
    cursor: pointer;
    background-color: ${(props) => {
        switch (props.$variant) {
            case 'primary':
                return '#89AC76';
            case 'secondary':
                return 'black';
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
                return '140px';
            case 'm':
                return '232px';
            case 'l':
                return '400px';
            default:
                return '14px';
        }
    }};
`;
