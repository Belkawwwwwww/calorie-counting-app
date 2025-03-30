import { useEffect, useRef } from 'react';

export const useScrollToLastBlock = (dependency: number) => {
    const lastFoodBlockRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        lastFoodBlockRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [dependency]);
    return lastFoodBlockRef;
};
