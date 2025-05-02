import { MealType } from "@/g_shared/lib/type/nutritionTypes";
import { FoodOrProduct } from "@/g_shared/lib/type/SearchType";

export type Props = {
    isOpen: boolean;
    onClose: () => void;
    mealType: MealType;
    item: FoodOrProduct | null;
    onItemAdded: (item: FoodOrProduct, weight: number) => void;
    modalTitle: string;
    onSuccess?: () => void;
};