import { createContext, FC, useContext, useState } from 'react';
import { ErrorProviderProps, Props } from './type';

const ErrorContext = createContext<Props | undefined>(undefined);

export const useError = () => {
    const context = useContext(ErrorContext);
    if (!context) {
        throw new Error('useError должен использоваться внутри ErrorProvider');
    }
    return context;
};

export const ErrorProvider: FC<ErrorProviderProps> = (props) => {
    const [error, setError] = useState<string>('');
    return (
        <ErrorContext.Provider value={{ error, setError }}>
            {props.children}
        </ErrorContext.Provider>
    );
};
