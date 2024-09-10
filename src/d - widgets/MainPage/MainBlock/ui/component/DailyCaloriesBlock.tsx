import { useGetUserDataQuery } from '@/d - widgets/TestPage/api/surveyApi';
import { LoadingIndicator } from '@/g - shared/ui/Loader/LoadingIndicator';
import React, { FC, useEffect } from 'react';
interface DailyCaloriesBlockProps {
    onCaloriesCalculated: any
}
export const DailyCaloriesBlock: FC<DailyCaloriesBlockProps> = ({ onCaloriesCalculated}) => {
    const { data: userData, isLoading } = useGetUserDataQuery();
    useEffect(() => {
        if (isLoading) {
            const dailyCalories = calculateDailyCalories();

            onCaloriesCalculated(dailyCalories);
        }
    }, [isLoading]);

    const basalMetabolism = () => {
        const { gender, weight, growth, age } = userData?.data?.data || {};

        return gender === 'MALE'
            ? 66.5 +
                  13.75 * (weight || 0) +
                  5.003 * (growth || 0) -
                  6.755 * (age || 0)
            : 655.1 +
                  9.563 * (weight || 0) +
                  1.85 * (growth || 0) -
                  4.676 * (age || 0);
    };

    const calculateActivityCoefficient = () => {
        const { activity } = userData?.data.data || {};

        switch (activity) {
            case 'SEDENTARY_LIFESTYLE':
                return 1.2;
            case 'MODERATE_LIFESTYLE':
                return 1.375;
            case 'ACTIVE_LIFESTYLE':
                return 1.55;
            case 'HIGHLY_ACTIVE_LIFESTYLE':
                return 1.725;
            default:
                return 1.2;
        }
    };

    const calculateDailyCalories = () => {
        const activityCoefficient = calculateActivityCoefficient();
        const basalMetabolismValue = basalMetabolism();
        const dailyCalories = basalMetabolismValue * activityCoefficient;

        if (userData?.data.data.target === 'LOSE_WEIGHT') {
            return dailyCalories - 400;
        } else if (userData?.data.data.target === 'GAIN_WEIGHT') {
            return dailyCalories + 400;
        } else {
            return dailyCalories;
        }
    };
    if (isLoading) {
        return <LoadingIndicator />;
    }

    return null;
    // (
    //     <div>
    //         <div>
    //             <h1>{calculateDailyCalories().toFixed(0)}</h1>
    //         </div>
    //     </div>
    // );
};

export default DailyCaloriesBlock;
