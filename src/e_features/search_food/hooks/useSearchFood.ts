import { useSearchFoodOrProductQuery } from "../../create_food/api/mealApi"

export const useSearchFood = (query: string | null) => {
    const { data, isLoading, error } = useSearchFoodOrProductQuery(query, {
        skip: query === null || query === undefined || query === ''
    });
    return { data, isLoading, error };
}