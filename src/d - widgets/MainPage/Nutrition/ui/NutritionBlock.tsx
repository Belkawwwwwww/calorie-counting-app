import styled from 'styled-components';

const StyledNutritionBlock = styled.div`
    margin-top: 40px;
`;
const StyledMeal = styled.div`
    border: 1px solid var(--color-background1);
    border-radius: 8px;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    display: flex;

    /* justify-content: center; */
`;
export const NutritionBlock = () => {
    return (
        <StyledNutritionBlock>
            <StyledMeal>Завтрак</StyledMeal>
            <StyledMeal>Обед</StyledMeal>
            <StyledMeal>Ужин</StyledMeal>
            <StyledMeal>Перекус</StyledMeal>
        </StyledNutritionBlock>
    );
};
