import { useRouter } from 'next/router';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';
type LinkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    to: string;
    hoverColor?: string;
};

const StyledLinkButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: black;
    font-size: 14px;
    text-decoration: none;
    padding: 10px 15px; // Увеличенная область клика
    transition:
        background 0.3s,
        color 0.3s;

    /* &:hover {
        color: #89ac76;
    } */

    &:focus {
        outline: none; // Убираем стандартное выделение
    }
    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {
        padding: 10px 10px;
        font-size: 10px;
    }
`;
export const LinkButton: FC<LinkButtonProps> = (props) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(props.to);
    };

    return (
        <StyledLinkButton onClick={handleClick} {...props}>
            {props.children}
        </StyledLinkButton>
    );
};
