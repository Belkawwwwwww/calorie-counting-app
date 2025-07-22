import { FoodOrProduct } from "@/g_shared/lib/type/SearchType";

export const calculateNutritionData = (item: FoodOrProduct, weightValue: number) => {
    const caloriesPerGram = item.calories / 100;
    const proteinPerGram = item.protein / 100;
    const fatPerGram = item.fat / 100;
    const carbsPerGram = item.carbs / 100;
    return {
        ...item,
        calories: caloriesPerGram * weightValue,
        protein: proteinPerGram * weightValue,
        fat: fatPerGram * weightValue,
        carbs: carbsPerGram * weightValue,
    }
}