import { MealType } from '@/g_shared/lib/type/nutritionTypes';

export type Props = {
    mealType: MealType;
    calories: number;
    onClick: () => void;
};
