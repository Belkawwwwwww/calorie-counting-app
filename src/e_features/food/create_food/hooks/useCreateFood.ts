import { useCreateFoodMutation } from '@/e_features/food/api/mealApi';

export const useCreateFood = () => {
    const [createFood, { isLoading }] = useCreateFoodMutation();
    return { createFood, isLoading };
};
