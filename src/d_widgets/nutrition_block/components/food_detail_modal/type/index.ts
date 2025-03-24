import { MealType } from '@/g_shared/lib/type/nutritionTypes';

export type Props = {
    title: MealType;
    value: string;
    data: string;
    handleTabChange: (tab: string) => void;
    activeTab: string;
    handleCloseAdditionalModal: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
