import { DataMeal } from '../../type/nutritionTypes';

export type MealProps = {
    mealData: DataMeal | undefined;
    isLoading: boolean;
    error: any;
    refetch: () => void;
};

export type Props = {
    children: React.ReactNode;
};
