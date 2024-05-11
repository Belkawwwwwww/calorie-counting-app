import React from 'react';
import styled from "styled-components";
const StyledMainBlock = styled.div`
  background-color: #89AC76;
  border-radius: 8px;
  width: 500px;
  height: 259px;
  margin: 0 auto;
  
`
const StyledFirstBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const StyledCircle = styled.div`
  
`
const StyledCalories=styled.div`
    
`
const StyledTwoBlock= styled.div`
  display: flex;
`
export const MainBlock = () => {
    return (
        <StyledMainBlock>
            <StyledFirstBlock>
                <StyledCircle>Круг заполнения</StyledCircle>
                <StyledCalories>
                    <h1>1360</h1>
                    <div>съедено</div>
                </StyledCalories>
            </StyledFirstBlock>
            <StyledTwoBlock>
                <>Углеводы</>
                <>Белки</>
                <>Жиры</>
            </StyledTwoBlock>
        </StyledMainBlock>
    );
};
