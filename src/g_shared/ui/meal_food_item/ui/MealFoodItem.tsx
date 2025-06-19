import { FC } from 'react';
import { Props } from '../type';
import { BoxCalories, Calories, Gram, Meal, MealName } from './style';

const calculateCalories = (cal100g: number, weightInGrams: number): number => {
    const caloriesPerGram = cal100g / 100;
    const totalCalories = caloriesPerGram * weightInGrams
    return Math.ceil(totalCalories)
}
export const MealFoodItem: FC<Props> = (props) => {

    const { mealFood } = props
    const calories = calculateCalories(mealFood.info.calories, mealFood.weight)
    console.log((mealFood.info))
    return (
        <Meal key={mealFood.id}>
            <MealName>
                <>{mealFood.name ? mealFood.name : 'Неопределен'}</>
                <Gram>{mealFood.weight} г</Gram>
            </MealName>
            <BoxCalories>
                <Calories>{calories}</Calories>
                <>ккал</>
            </BoxCalories>
        </Meal>
    );
};
