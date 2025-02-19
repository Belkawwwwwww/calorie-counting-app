import { Meal } from '@/f_entities/meal/type/mealModel';

export type Props = {
    title: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClose: () => void;
    dataMeal: Meal | null;
};
