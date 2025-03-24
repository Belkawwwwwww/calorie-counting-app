import { useGetUserMealQuery } from '../../api/mealApi';

export const useGetUserMeal = (date: string) => {
    const { data, error, isLoading } = useGetUserMealQuery(date);
    return { data, isLoading, error };
};
