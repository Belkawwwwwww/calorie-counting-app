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
const StyledFirstBlock = styled.div`
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;
const StyledCircle = styled.div`
    border: #f0f0f0 solid 5px;
    border-radius: 50%;
    padding: 13px 20px 13px 20px;
`;
const StyledCalories = styled.div`
    display: flex;
`;
const StyledTwoBlock = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
`;
const StyledBJU = styled.div`
    flex: 0 0 33.3%;
`;
const StyledNorm = styled.div``;
export const SummaryBlock = () => {
    const [dailyCalories, setDailyCalories] = useState(0);
    const handleCalories = (calories: number) => {
        setDailyCalories(calories);
    };

    return (
        <StyledSummaryBlock>
            <StyledFirstBlock>
                <StyledNorm>
                    <>цель</>
                </StyledNorm>
                <StyledCircle>
                    {' '}
                    <DailyCaloriesBlock onCaloriesCalculated={handleCalories} />
                </StyledCircle>
                <StyledCalories>
                    <div>съедено</div>
                </StyledCalories>
            </StyledFirstBlock>
            <StyledTwoBlock>
                <StyledBJU>
                    Углеводы: {((dailyCalories * 0.6) / 4).toFixed(0)} г
                </StyledBJU>
                <StyledBJU>
                    Белки:{' '}
                    {dailyCalories !== 0
                        ? ((dailyCalories * 0.22) / 4).toFixed(0)
                        : 0}{' '}
                    г
                </StyledBJU>
                <StyledBJU>
                    Жиры:{' '}
                    {dailyCalories !== 0
                        ? ((dailyCalories * 0.35) / 9).toFixed(0)
                        : 0}{' '}
                    г
                </StyledBJU>
            </StyledTwoBlock>
        </StyledSummaryBlock>
    );
};
