import { useCallback, useEffect, useState } from "react";
import { useSearchFood } from "./useSearchFood";

export const useLazySearchFood = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const { data, isLoading, error } = useSearchFood(debouncedSearchTerm);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTermLocal)
        }, 450);

        return () => clearTimeout(timerId);
    }, [searchTermLocal]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTermLocal(e.target.value);

    }, []);

    const resetSearch = useCallback(() => {
        setSearchTermLocal('');
        setDebouncedSearchTerm('')

    }, []);

    return {
        data,
        isLoading,
        error,
        searchTermLocal,
        resetSearch,
        handleInputChange
    };
};
