import { useState } from "react";

type UseModalResult = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}
export const useModal = (): UseModalResult => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return {
        isOpen,
        openModal,
        closeModal,
    };
};
