import { MealType } from '@/g_shared/lib/type/nutritionTypes';

export type Props = {
    title: MealType;
    handleCloseAdditionalModal?: () => void;
};
