import { useCreateFoodMutation } from '@/e_features/create_food/api/mealApi';

export const useCreateFood = () => {
    const [createFood, { isLoading }] = useCreateFoodMutation();
    return { createFood, isLoading };
};
