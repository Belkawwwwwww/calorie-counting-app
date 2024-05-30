import React from 'react';
import styled from 'styled-components';
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
    justify-content: space-evenly;
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
    return (
        <StyledSummaryBlock>
            <StyledFirstBlock>
                <StyledCircle>Круг заполнения</StyledCircle>
                <StyledCalories>
                    <h1>1360</h1>
                    <div>съедено</div>
                </StyledCalories>
            </StyledFirstBlock>
            <StyledTwoBlock>
                <StyledBJU>Углеводы</StyledBJU>
                <StyledBJU>Белки</StyledBJU>
                <StyledBJU>Жиры</StyledBJU>
            </StyledTwoBlock>
        </StyledSummaryBlock>
    );
};
