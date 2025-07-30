import styled from 'styled-components';

export const Meal = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-text3);
    padding: 7px 7px 7px 0px;
    /* align-items: center; */
`;
export const Gram = styled.div`
    font-size: 11px;
    @media (max-width: 480px) {
        font-size: 10px;
    }
`;
export const MealName = styled.div`
    display: flex;
    flex-direction: column;
    width: 440px;
    @media (max-width: 768px) {
        width: 360px;
        font-size: 14px;
    }
    @media (max-width: 480px) {
        font-size: 12px;
        width: 210px;
    }
`;
export const Calories = styled.div`
    padding-right: 5px;
    @media (max-width: 480px) {
        font-size: 12px;
        padding-right: 0;
    }
`
export const BoxCalories = styled.div`
    display: flex;
`

