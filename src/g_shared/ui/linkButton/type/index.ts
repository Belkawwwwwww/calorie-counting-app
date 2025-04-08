import { ButtonHTMLAttributes, ReactNode } from 'react';

export type LinkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    to?: string;
    hoverColor?: string;
    isActive?: boolean;
};
