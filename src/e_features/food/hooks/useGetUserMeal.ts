import { useCreateFoodMutation, useGetUserMealQuery } from '../api/mealApi';

export const useGetUserMeal = (date: string) => {
    const { data, error, isLoading } = useGetUserMealQuery(date);
    return { data, isLoading, error };
};
export const useCreateFood = () => {
    const [createFood, { isLoading }] = useCreateFoodMutation();
    return { createFood, isLoading };
};
