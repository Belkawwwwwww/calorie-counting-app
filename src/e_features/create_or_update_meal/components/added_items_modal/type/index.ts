import { MealType } from "@/g_shared/lib/type/nutritionTypes";

export type Props = {
    onDeleteItem: (index: number) => void;
    title: MealType
};