import { FC } from 'react';
import { Props } from '../type';
import { BoxCalories, Calories, Gram, Meal, MealName } from './style';
import { calculateCalories } from '@/g_shared/lib/utils';

export const MealFoodItem: FC<Props> = (props) => {
    const { mealFood } = props
    const calories = calculateCalories(mealFood.info.calories, mealFood.weight)
    return (
        <Meal key={mealFood.id}>
            <MealName>
                <>{mealFood.name ? mealFood.name : 'Неопределен'}</>
                <Gram>{mealFood.weight} г</Gram>
            </MealName>
            <BoxCalories>
                <Calories>{calories} ккал</Calories>
            </BoxCalories>
        </Meal>
    );
};
