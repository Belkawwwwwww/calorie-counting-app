import { ReactNode } from 'react';

export type Props = {
    header?: ReactNode;
    form?: ReactNode;
    title: string;
    content?: 'center';
    nextButton?: ReactNode;
};
