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
    const [errors, setErrors] = useState<Record<string, string>>({}); // Хранит ошибки как объект

    const setError = (key: string, error: string) => {
        setErrors((prev) => ({ ...prev, [key]: error }));
    };

    const clearError = (key: string) => {
        setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[key]; // Удаляем ошибку по ключу
            return newErrors;
        });
    };

    return (
        <ErrorContext.Provider value={{ errors, setError, clearError }}>
            {props.children}
        </ErrorContext.Provider>
    );
};
