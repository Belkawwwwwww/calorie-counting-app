import { useCallback, useEffect, useState } from "react";
import { useSearchFood } from "./useSearchFood";

export const useLazySearchFood = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [hasSearchBeenPerformed, setHasSearchBeenPerformed] = useState(false);
    const [isDebouncing, setIsDebouncing] = useState(false);
    const { data, isLoading, error } = useSearchFood(debouncedSearchTerm);

    useEffect(() => {
        setIsDebouncing(searchTermLocal.length > 0);
        const timerId = setTimeout(() => {
            if (searchTermLocal.length > 0) {
                setDebouncedSearchTerm(searchTermLocal)
                setHasSearchBeenPerformed(true)
            } else {
                setDebouncedSearchTerm('')
                setHasSearchBeenPerformed(false)
            }
            setIsDebouncing(false);
        }, 450);

        return () => {
            clearTimeout(timerId);
            setIsDebouncing(false)
        }
    }, [searchTermLocal]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTermLocal(e.target.value);

    }, []);

    const resetSearch = useCallback(() => {
        setSearchTermLocal('');
        setDebouncedSearchTerm('')
        setHasSearchBeenPerformed(false);
        setIsDebouncing(false);

    }, []);

    return {
        data,
        isLoading,
        error,
        searchTermLocal,
        resetSearch,
        handleInputChange,
        hasSearchBeenPerformed,
        isDebouncing
    };
};
