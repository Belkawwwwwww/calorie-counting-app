import React, {FC} from 'react';
import styled from 'styled-components';
import {Layout} from '@/g - shared/ui/layout';
import {Calendar} from '@/d - widgets/MainPage/Calendar';
import {SummaryBlock} from '@/d - widgets/MainPage/MainBlock/ui/SummaryBlock';
import {NutritionBlock} from '@/d - widgets/MainPage/Nutrition/ui/NutritionBlock';
import {ProtectedRoute} from '@/c - pages/router-providers';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
`;
const StyledDateNow = styled.div`
    font-size: 20px;
`;

export const MainPage: FC = () => {
    return (
        <ProtectedRoute>
            <Layout>
                <StyledHeader>
                    <StyledDateNow>Сегодня</StyledDateNow>
                    <Calendar/>
                </StyledHeader>
                <SummaryBlock/>
                <NutritionBlock/>
            </Layout>
        </ProtectedRoute>
    );
};
