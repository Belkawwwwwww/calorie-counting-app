import styled from 'styled-components';
export const StyledImage = styled.div`
    margin-right: 7px;
    font-size: 16px;
    img {
        width: 30px;
        height: 30px;
    }
    
`;
export const Meal = styled.div`
    border: 1px solid rgb(181, 109, 91);
    border-radius: 8px;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    display: flex;
    padding: 0 10px;
    align-items: center;
    font-family: none;
    justify-content: space-between;
    &:hover {
        background-color: var(--color-text5);
    }
    cursor: pointer;
`;
export const MealContent = styled.div`
  display: flex;
  align-items: center;
`;
