import { z } from 'zod';
import {
    FoodBlock,
    MealValidationErrors,
} from '../../../../g_shared/lib/type/createOrUpdateTypes';

export const processMealZodErrors = (
    error: z.ZodError,
    foodBlocks: FoodBlock[],
    setValidationErrors: React.Dispatch<
        React.SetStateAction<MealValidationErrors[]>
    >
) => {
    const initialErrors: MealValidationErrors[] = foodBlocks.map(() => ({
        id: '',
        weight: '',
    }));

    for (const err of error.errors) {
        if (err.path[0] === 'food' && typeof err.path[1] === 'number') {
            const productIndex = err.path[1];
            if (productIndex >= 0 && productIndex < initialErrors.length) {
                if (err.path[2] === 'id') {
                    initialErrors[productIndex].id = err.message;
                } else if (err.path[2] === 'weight') {
                    initialErrors[productIndex].weight = err.message;
                }
            }
        }
    }

    setValidationErrors(initialErrors);
};
