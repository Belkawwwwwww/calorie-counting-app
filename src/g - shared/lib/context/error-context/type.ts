import { ReactNode } from 'react';

export type Props = {
    error: string;
    setError: (error: string) => void;
};
export type ErrorProviderProps = {
    children: ReactNode;
};
