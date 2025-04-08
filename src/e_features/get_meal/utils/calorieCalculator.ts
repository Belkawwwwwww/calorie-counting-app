import { Meal, MealType } from '@/g_shared/lib/type/nutritionTypes';

export const calculateCalories = (
    dataMeal: Meal[],
    caloriesMap: Record<MealType, number>
): Record<MealType, number> => {
    if (!dataMeal) return caloriesMap;

    dataMeal.forEach((meal) => {
        const mealType = meal.meal_type as MealType;
        if (mealType in caloriesMap) {
            // Суммируем калории
            caloriesMap[mealType] += meal.info.calories;
        }
    });
    return caloriesMap;
};
