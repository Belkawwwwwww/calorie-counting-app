import { MealInfo } from '@/f_entities/meal/type/mealModel';

export type Props = {
    title: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClose: () => void;
    mealInfo: MealInfo | null;
};
