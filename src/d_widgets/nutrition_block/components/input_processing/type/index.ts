import { Meal } from '@/g_shared/lib/type/nutritionTypes';

export type Props = {
    data: string;
    title: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClose: () => void;
    dataMeal: Meal | null;
};
