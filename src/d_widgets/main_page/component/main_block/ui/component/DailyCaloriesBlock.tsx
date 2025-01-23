import { useGetBzu } from '@/e_features/bzu/hooks/bzuHooks';
import { useGetUserDataQuery } from '@/e_features/survey/api/surveyApi';
import { useGetUserSurvey } from '@/e_features/survey/hooks/surveyHooks';
import { LoadingIndicator } from '@/g_shared/ui/loader';
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
    const { data, isLoading } = useGetBzu();

    const maxCalories = data?.data.max || 0;
    const currentCalories = data?.data.current || 0;
    const result = maxCalories - currentCalories;

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return (
        <div>
            <MainCont>
                <h1>{result.toFixed(0)}</h1>
                <Text>осталось</Text>
            </MainCont>
        </div>
    );
};

export default DailyCaloriesBlock;
