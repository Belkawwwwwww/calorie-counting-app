import { createContext, useContext, FC } from 'react';
import { MealProps, Props } from './type';
import { useGetUserMeal } from '@/e_features/meal/get_meal/hooks/useGetUserMeal';

import { DataMeal } from '../../type/nutritionTypes';
import { getFormattedDate } from '../../utils';

const MealDataContext = createContext<MealProps | undefined>(undefined);

export const MealDataProvider: FC<Props> = (props) => {
    const formattedDate = getFormattedDate();
    const {
        data: userMealData,
        isLoading,
        error,
        refetch,
    } = useGetUserMeal(formattedDate);

    const mealData = userMealData as DataMeal | undefined;
    return (
        <MealDataContext.Provider
            value={{ mealData, isLoading, error, refetch }}
        >
            {props.children}
        </MealDataContext.Provider>
    );
};

export const useMealDataContext = () => {
    const context = useContext(MealDataContext);
    if (!context) {
        throw new Error('');
    }
    return context;
};
