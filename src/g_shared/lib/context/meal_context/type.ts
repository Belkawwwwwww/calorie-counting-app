import { Dayjs } from 'dayjs';
import { DataMeal } from '../../type/nutritionTypes';

export type MealProps = {
    mealData: DataMeal | undefined;
    isLoading: boolean;
    error: any;
    refetch: () => void;
};
export interface MealContextProps extends MealProps {
    selectedDate: Dayjs | null;
    setSelectedDate: (date: Dayjs | null) => void;
    formattedDate: string;
}


export type Props = {
    children: React.ReactNode;
};
