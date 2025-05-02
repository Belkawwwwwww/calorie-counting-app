import { ReactNode } from 'react';

export type Props = {
    errors: Record<string, string>;
    setError: (key: string, error: string) => void;
    clearError: (key: string) => void;
};

export type ErrorProviderProps = {
    children: ReactNode;
};
