import styled from 'styled-components';
import { LinkButton } from '../linkButton';
interface ToggleButtonProps {
    isActive?: boolean;
}
export const ToggleButtons = styled(LinkButton)<ToggleButtonProps>`
    background-color: ${({ isActive }) => (isActive ? 'lightgray' : 'white')};
    color: ${({ isActive }) => (isActive ? '#89AC76' : 'black')};
    margin: 0 5px;
    border-radius: 10px;
`;
export const PublicContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-left: 8px;
    padding-bottom: 8px;
    justify-content: space-between;
    border-bottom: 1px solid #eaeff2;
`;
