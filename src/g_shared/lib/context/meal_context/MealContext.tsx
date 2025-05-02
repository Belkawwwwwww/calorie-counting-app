import { useGetUserMeal } from '@/e_features/get_meal/hooks/useGetUserMeal';
import { FetchIndicator } from '@/g_shared/ui/fetchn_indicator/ui/FetchIndicator';
import dayjs, { Dayjs } from 'dayjs';
import { FC, createContext, useCallback, useContext, useState } from 'react';
import { DataMeal } from '../../type/nutritionTypes';
import { getFormattedDate } from '../../utils';
import { MealContextProps, Props } from './type';

const MealDataContext = createContext<MealContextProps | undefined>(undefined);


export const MealDataProvider: FC<Props> = (props) => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
    const formattedDate = selectedDate ? selectedDate.format('YYYY-MM-DD') : getFormattedDate();

    const {
        data: userMealData,
        isLoading,
        error,
        refetch,
    } = useGetUserMeal(formattedDate);

    const mealData = userMealData as DataMeal | undefined;
    const value: MealContextProps = {
        mealData,
        isLoading,
        error,
        refetch,
        selectedDate,
        setSelectedDate: useCallback(setSelectedDate, []),
        formattedDate,
    };

    return (
        <FetchIndicator isLoading={isLoading}>
            <MealDataContext.Provider
                value={value}
            >
                {props.children}
            </MealDataContext.Provider>
        </FetchIndicator>

    );
};

export const useMealDataContext = () => {
    const context = useContext(MealDataContext);
    if (!context) {
        throw new Error('');
    }
    return context;
};
