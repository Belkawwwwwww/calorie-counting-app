import { MealType } from '@/g_shared/lib/type/nutritionTypes';

export type Props = {
    handleTabChange: (tab: string) => void; // Функция, которая принимает имя вкладки
    activeTab: string; // Текущая активная вкладка
    data: string;
    title: MealType;
    handleCloseAdditionalModal?: () => void;
};
