import { FoodOrProduct } from '@/g_shared/lib/type/SearchType';

export type Nutrient = {
    value: number;
    label: string;
};

export type NutritionTitleProps = {
    nutritionData?: { value: number; label: string }[];
    foodOrProduct?: FoodOrProduct | null
}
