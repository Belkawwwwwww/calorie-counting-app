import { ReactNode } from 'react';

export type Props = {
    errors: Record<string, string>; // Мапа с ошибками, где ключ - это название ошибки, значение - сообщение
    setError: (key: string, error: string) => void; // Функция для установки ошибки по ключу
    clearError: (key: string) => void; // Функция для очистки ошибки по ключу
};

export type ErrorProviderProps = {
    children: ReactNode;
};
