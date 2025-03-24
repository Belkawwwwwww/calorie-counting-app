import styled from 'styled-components';
import { Button } from '../../../../../g_shared/ui/button';

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const MenuSelection = styled.div`
    margin-bottom: 20px;
`;
export const OptionBlock = styled.div`
    display: flex;
    gap: 20px;
`;

export const Option = styled.div<{ isSelected: boolean }>`
    width: 130px;
    height: 40px;
    border: 1px solid #89ac76;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: ${(props) =>
        props.isSelected ? '#ebebeb' : 'transparent'};
    text-align: center;
    &:hover {
        background-color: #ebebeb;
    }
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
