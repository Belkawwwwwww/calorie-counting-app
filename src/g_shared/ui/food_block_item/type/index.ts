import { FoodBlock, MealValidationErrors } from "@/g_shared/lib/type/createOrUpdateTypes";

export type Props = {
    foodBlock: FoodBlock;
    index: number;
    totalBlocks: number;
    onUpdate: (index: number, key: keyof FoodBlock, value: string) => void;
    onRemove?: (index: number) => void;
    validationErrors: MealValidationErrors[];
    mealTypeOptions: { value: string; label: string }[];
    lastFoodBlockRef: React.RefObject<HTMLDivElement>;
};