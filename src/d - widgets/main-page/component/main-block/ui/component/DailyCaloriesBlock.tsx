import { useGetUserDataQuery } from '@/d - widgets/test-page/api/surveyApi';
import { LoadingIndicator } from '@/g - shared/ui/loader';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

type DailyCaloriesBlockProps = {
    onCaloriesCalculated: (calories: number) => void;
};
const MainCont = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Text = styled.div`
    font-size: 10px;
`;
export const DailyCaloriesBlock: FC<DailyCaloriesBlockProps> = (props) => {
    const { data: userData, isLoading } = useGetUserDataQuery();
    const [dailyCalories, setDailyCalories] = useState(0);
    useEffect(() => {
        if (!isLoading && userData?.data) {
            const calories = calculateDailyCalories();
            setDailyCalories(calories);
            props.onCaloriesCalculated(calories);
        }
    }, [isLoading, userData]);

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

        const target = userData?.data?.data.target;

        if (target === 'LOSE_WEIGHT') {
            return dailyCalories - 400;
        } else if (target === 'GAIN_WEIGHT') {
            return dailyCalories + 400;
        } else {
            return dailyCalories;
        }
    };
    if (isLoading) {
        return <LoadingIndicator />;
    }

    return (
        <div>
            <MainCont>
                <h1>{dailyCalories.toFixed(0)}</h1>
                <Text>осталось</Text>
            </MainCont>
        </div>
    );
};

export default DailyCaloriesBlock;
