import styled from 'styled-components';

const StyledNutritionBlock = styled.div`
    margin-top: 40px;
`;
const Meal = styled.div`
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
export const NutritionBlock = () => {
    return (
        <StyledNutritionBlock>
            <Meal>Завтрак 0/</Meal>
            <Meal>Обед 0/</Meal>
            <Meal>Ужин 0/</Meal>
            <Meal>Перекус 0/</Meal>
        </StyledNutritionBlock>
    );
};
