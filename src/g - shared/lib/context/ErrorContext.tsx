import { createContext, FC, ReactNode, useContext, useState } from 'react';

interface ErrorContextType {
    error: string;
    setError: (error: string) => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useError = () => {
    const context = useContext(ErrorContext);
    if (!context) {
        throw new Error('useError должен использоваться внутри ErrorProvider');
    }
    return context;
};

interface ErrorProviderProps {
    children: ReactNode;
}

export const ErrorProvider: FC<ErrorProviderProps> = ({ children }) => {
    const [error, setError] = useState<string>('');
    return (
        <ErrorContext.Provider value={{ error, setError }}>
            {children}
        </ErrorContext.Provider>
    );
};
