import React, { useState } from 'react';
import styled from 'styled-components';
import { DailyCaloriesBlock } from './component/DailyCaloriesBlock';
const StyledSummaryBlock = styled.div`
    background-color: var(--color-background1);
    border-radius: 8px;
    width: 500px;
    height: 259px;
    margin: 0 auto;
    color: white;
`;
const FirstBlock = styled.div`
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;
const Circle = styled.div`
    border: #f0f0f0 solid 5px;
    border-radius: 50%;
    padding: 13px 20px 13px 20px;
`;
const Calories = styled.div`
    display: flex;
`;
const TwoBlock = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
`;
const BJU = styled.div`
    flex: 0 0 33.3%;
`;
const Norm = styled.div``;
export const SummaryBlock = () => {
    const [dailyCalories, setDailyCalories] = useState(0);
    const handleCalories = (calories: number) => {
        setDailyCalories(calories);
    };

    return (
        <StyledSummaryBlock>
            <FirstBlock>
                <Norm>
                    <>цель</>
                </Norm>
                <Circle>
                    {' '}
                    <DailyCaloriesBlock onCaloriesCalculated={handleCalories} />
                </Circle>
                <Calories>
                    <div>съедено</div>
                </Calories>
            </FirstBlock>
            <TwoBlock>
                <BJU>
                    Углеводы: {((dailyCalories * 0.6) / 4).toFixed(0)} г
                </BJU>
                <BJU>
                    Белки:{' '}
                    {dailyCalories !== 0
                        ? ((dailyCalories * 0.22) / 4).toFixed(0)
                        : 0}{' '}
                    г
                </BJU>
                <BJU>
                    Жиры:{' '}
                    {dailyCalories !== 0
                        ? ((dailyCalories * 0.35) / 9).toFixed(0)
                        : 0}{' '}
                    г
                </BJU>
            </TwoBlock>
        </StyledSummaryBlock>
    );
};
