import { MealType } from '@/g_shared/lib/type/nutritionTypes';

export type FoodBlock = {
    type: 'product' | 'food';
    id: string;
    weight: string;
};
export type MealDataParams = {
    day: string;
    food: FoodBlock[];
    meal_type: MealType;
};
export type MealData = {
    day: string;
    food: { type: 'product' | 'food'; id: number; weight: number }[];
    meal_type: MealType;
};
export type MealValidationErrors = {
    id: string;
    weight: string;
};
