import React, { useState } from 'react';
import styled from 'styled-components';
import DailyCaloriesBlock from './component/DailyCaloriesBlock';
const StyledSummaryBlock = styled.div`
    background-color: var(--color-background1);
    border-radius: 8px;
    width: 500px;
    height: 259px;
    margin: 0 auto;
    color: white;
`;
const StyledFirstBlock = styled.div`
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;
const StyledCircle = styled.div``;
const StyledCalories = styled.div``;
const StyledTwoBlock = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
`;
const StyledBJU = styled.div`
    flex: 0 0 33.3%;
`;
export const SummaryBlock = () => {
    const [dailyCalories, setDailyCalories]= useState(0)

    const handleCalories = (calories: number) => {
        setDailyCalories(calories)
    }
    // Расчет норм БЖУ
    const proteinGrams = (dailyCalories * 0.22) / 4; // 22% белков
    const carbohydratesGrams = (dailyCalories * 0.6) / 4; // 60% углеводов
    const fatGrams = (dailyCalories * 0.35) / 9; // 35% жиров

    return (
        <StyledSummaryBlock>
            <StyledFirstBlock>
                <StyledCircle>Круг заполнения</StyledCircle>
                <DailyCaloriesBlock onCaloriesCalculated={handleCalories}/>
                <StyledCalories>
                    <div>съедено</div>
                </StyledCalories>
            </StyledFirstBlock>
            <StyledTwoBlock>
                <StyledBJU>
                    Углеводы: {carbohydratesGrams.toFixed(0)} г
                </StyledBJU>
                <StyledBJU>Белки: {proteinGrams.toFixed(0)} г</StyledBJU>
                <StyledBJU>Жиры: {fatGrams.toFixed(0)} г</StyledBJU>
            </StyledTwoBlock>
        </StyledSummaryBlock>
    );
};
