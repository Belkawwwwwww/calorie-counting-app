import { useGetUserMealQuery } from '../api/foodApi';

export const useGetUserMeal = (date: string) => {
    const { data, error, isLoading } = useGetUserMealQuery(date);
    return { data, isLoading, error };
};
