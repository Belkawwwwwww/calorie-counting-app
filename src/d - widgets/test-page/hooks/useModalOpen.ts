import { useCallback, useState } from 'react';

export const useModalOpen = (initialModalActive: boolean = false) => {
    const [isModalActive, setModalActive] = useState(initialModalActive);
    const handleModalOpen = useCallback(() => {
        setModalActive(true);
    }, []);

    const handleModalClose = useCallback(() => {
        setModalActive(false);
    }, []);

    return { isModalActive, handleModalOpen, handleModalClose };
};
