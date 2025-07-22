import { MealType } from "@/g_shared/lib/type/nutritionTypes";
import { FoodOrProduct } from "@/g_shared/lib/type/SearchType";

export type Props = {
    item: FoodOrProduct | null
    mealType?: MealType | string;
    handleCloseAdditionalModal: (item: FoodOrProduct, weight: number) => void;
};