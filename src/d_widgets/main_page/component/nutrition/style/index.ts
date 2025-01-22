import styled from 'styled-components';

export const StyledNutritionBlock = styled.div`
    margin-top: 40px;
`;
export const Meal = styled.div`
    border: 1px solid var(--color-background1);
    border-radius: 8px;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    display: flex;
    padding-left: 10px;
    align-items: center;
    &:hover {
        background-color: #ebebeb;
    }
    cursor: pointer;
`;
