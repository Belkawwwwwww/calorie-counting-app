import { Meal, MealType } from '@/g_shared/lib/type/nutritionTypes';

export type Props = {
    data: string;
    title: MealType;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClose: () => void;
    dataMeal: Meal | null;
};
