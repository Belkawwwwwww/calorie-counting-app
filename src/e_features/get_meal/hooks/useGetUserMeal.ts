import { useGetUserMealQuery } from '../../create_food/api/mealApi';

export const useGetUserMeal = (date: string) => {
    const { data, error, isLoading, refetch } = useGetUserMealQuery(date);
    return { data, isLoading, error, refetch };
};
