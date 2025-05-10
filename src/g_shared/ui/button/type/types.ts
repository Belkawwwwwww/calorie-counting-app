import React, { ReactNode } from 'react';

export const ButtonVariants = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    GREEN: 'green'
} as const;

export type BtnVariants = (typeof ButtonVariants)[keyof typeof ButtonVariants];

export const ButtonSize = {
    S: 'button--square--size-s',
    M: 'button--square--size-m',
    L: 'button--square--size-l',
} as const;

export type BtnSize = (typeof ButtonSize)[keyof typeof ButtonSize];

export const ButtonWidth = {
    S: 's',
    M: 'm',
    L: 'l',
};
export type BtnHeight = (typeof ButtonWidth)[keyof typeof ButtonWidth];

export type Props = {
    $variant?: BtnVariants;
    $btnSquareSize?: BtnSize;
    $btnWidth?: BtnHeight;
    children?: ReactNode;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type: string;
};
