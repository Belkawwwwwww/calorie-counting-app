import { DataMeal, Meal } from '../type/nutritionTypes';

export const calculatePercentages = (total: any, norm: any): number => {
    return norm > 0 ? (total / norm) * 100 : 0;
};

export const getTotalNutrients = (
    meals: Meal[]
): { totalProtein: number; totalFat: number; totalCarbs: number } => {
    const total = meals.reduce(
        (total: any, meal: any) => {
            total.protein += meal.info.protein;
            total.fat += meal.info.fat;
            total.carbs += meal.info.carbs;
            return total;
        },
        { protein: 0, fat: 0, carbs: 0 }
    );

    return {
        totalProtein: Math.ceil(total.protein),
        totalFat: Math.ceil(total.fat),
        totalCarbs: Math.ceil(total.carbs),
    };
};
