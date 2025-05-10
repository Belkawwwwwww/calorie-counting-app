import styled from 'styled-components';
import { LinkButton } from '../../linkButton';
interface ToggleButtonProps {
    isActive?: boolean;
}
export const ToggleButtons = styled(LinkButton) <ToggleButtonProps>`
    background-color: ${({ isActive }) => (isActive ? 'var(--color-text1)' : 'white')};
    color: ${({ isActive }) => (isActive ? 'var(--color-background5)' : 'black')};
    margin: 0 5px;
    border-radius: 10px;
    &:hover {
        color: var(--color-background5);
    }
`;
export const PublicContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-left: 8px;
    padding-bottom: 8px;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-text3);
`;
