import { MealType } from '@/f_entities/meal/type/mealModel';

export type Props = {
    mealType: MealType;
    calories: number;
    onClick: () => void;
};
