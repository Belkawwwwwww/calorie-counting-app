import { useEffect, useState } from 'react';

export const useMyHook = <T>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Создаем таймер, который будет выполнять функцию через заданную задержку
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Возвращаем функцию очистки, которая будет вызываться при размонтировании компонента
        // или при изменении значения 'value' или 'delay'
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};
