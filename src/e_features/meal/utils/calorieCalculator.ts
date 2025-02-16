import { DataMeal, MealType } from '@/f_entities/meal/type/mealModel';
export type Props = {
    dataMeal: DataMeal | undefined;
    caloriesMap: Record<MealType, number>;
};
export const calculateCalories = (
    dataMeal: DataMeal | undefined,
    caloriesMap: Record<MealType, number>
): Record<MealType, number> => {
    if (!dataMeal) return caloriesMap;

    dataMeal.data.forEach((meal) => {
        const mealType = meal.meal_type as MealType; // Приведение типа
        if (mealType in caloriesMap) {
            caloriesMap[mealType] = meal.info.calories; // юзаем доступные калории
        }
    });
    return caloriesMap;
};
