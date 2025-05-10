import { useState } from 'react';
import { FoodOrProduct } from '../../type/SearchType';

interface UseFoodBlockModalResult<T> {
    selectedItem: FoodOrProduct | null;
    setSelectedItem: (item: FoodOrProduct) => void;
    openFoodBlockModal: (item: FoodOrProduct) => void;
}

function useFoodBlockModal<T>(foodBlockModal: any): UseFoodBlockModalResult<T> {
    const [selectedItem, setSelectedItem] = useState<FoodOrProduct | null>(null);

    const openFoodBlockModal = (item: FoodOrProduct) => {
        setSelectedItem(item);
        foodBlockModal.openModal();
    };

    return {
        selectedItem,
        setSelectedItem,
        openFoodBlockModal,
    };
}

export default useFoodBlockModal;