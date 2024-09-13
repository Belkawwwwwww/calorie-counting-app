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
    padding-left: 10px;
    align-items: center;
`;
export const NutritionBlock = () => {
    return (
        <StyledNutritionBlock>
            <StyledMeal>Завтрак 0/</StyledMeal>
            <StyledMeal>Обед 0/</StyledMeal>
            <StyledMeal>Ужин 0/</StyledMeal>
            <StyledMeal>Перекус 0/</StyledMeal>
        </StyledNutritionBlock>
    );
};
