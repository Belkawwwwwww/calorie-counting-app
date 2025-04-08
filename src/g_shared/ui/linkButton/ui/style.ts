import styled from 'styled-components';

type StyledLinkButtonProps = {
    isActive?: boolean;
}


export const StyledLinkButton = styled.button<StyledLinkButtonProps>`

    background: transparent;
    border: none;
    cursor: pointer;
    color: ${props => (props.isActive ? '#89ac76' : 'black')};
    font-size: 14px;
    text-decoration: none;
    padding: 10px 15px;
    transition:
        background 0.3s,
        color 0.3s;

    &:hover {
        color: #89ac76;
    }

    &:focus {
        outline: none;
    }
    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {
        padding: 10px 10px;
        font-size: 10px;
    }
`;