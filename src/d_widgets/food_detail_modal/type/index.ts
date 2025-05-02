import { MealType } from '@/g_shared/lib/type/nutritionTypes';

export type Props = {
    title: MealType;
    value: string;
    handleCloseAdditionalModal: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClose: () => void;
};
