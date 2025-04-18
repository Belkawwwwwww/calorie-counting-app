import { MealType } from '@/g_shared/lib/type/nutritionTypes';

export type Nutrient = {
    value: number;
    label: string;
};

export type NutritionTitleProps = {
    // nutritionData: { value: number; label: string }[];
    mealType: MealType;
    // item?: FoodOrProduct | null
}
