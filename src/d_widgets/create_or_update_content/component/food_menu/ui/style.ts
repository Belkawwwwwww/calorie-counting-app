import styled from "styled-components";
type StyledProps = {
    isActive?: boolean;
}
export const MenuSelection = styled.div`
    margin-bottom: 20px;
    display: flex;
`;
export const Selection = styled.div<StyledProps>`
    border: var(--color-text1) 1px solid;
    box-shadow: 0 0px 3px #eaeff2;
    border-radius: 4px;
    width: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => (props.isActive ? 'var(--color-text1)' : 'none')};
`
export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
`;