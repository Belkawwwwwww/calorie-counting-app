import { FoodBlock } from '@/g_shared/lib/type/createOrUpdateTypes';
import { useState } from 'react';

export const useFoodBlocks = () => {
    const [foodBlocks, setFoodBlocks] = useState<FoodBlock[]>([
        { id: '', weight: '', type: 'product' },
    ]);

    const updateFoodBlock = (
        index: number,
        key: keyof FoodBlock,
        value: string
    ) => {
        const newFoodBlocks = [...foodBlocks];
        newFoodBlocks[index] = { ...newFoodBlocks[index], [key]: value };
        setFoodBlocks(newFoodBlocks);
    };

    const handleAddFoodBlock = () => {
        setFoodBlocks([...foodBlocks, { id: '', weight: '', type: 'product' }]);
    };

    const handleRemoveFoodBlock = (index: number) => {
        const newFoodBlocks = [...foodBlocks];
        newFoodBlocks.splice(index, 1);
        setFoodBlocks(newFoodBlocks);
    };

    return {
        foodBlocks,
        handleAddFoodBlock,
        handleRemoveFoodBlock,
        updateFoodBlock,
    };
};
