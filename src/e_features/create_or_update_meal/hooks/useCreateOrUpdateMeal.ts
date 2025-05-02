import { useCreateOrUpdateMealMutation } from '../../create_food/api/mealApi';

export const useCreateOrUpdateMeal = () => {
    const [createOrUpdateMeal, { isLoading }] = useCreateOrUpdateMealMutation();
    return { createOrUpdateMeal, isLoading };
};
