import { MealType } from "../type/nutritionTypes";

export const imagePaths = {
    breakfast: '/breakfast.png',
    lunch: '/lunch.png',
    dinner: '/dinner.png',
};

export const getImageSource = (mealType: MealType): string => {
    return imagePaths[mealType] ?? '/default.png';
};