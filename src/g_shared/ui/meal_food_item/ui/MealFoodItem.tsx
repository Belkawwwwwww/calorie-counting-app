import { FC } from 'react';
import { Props } from '../type';
import { BoxCalories, Calories, Gram, Meal, MealName } from './style';

export const MealFoodItem: FC<Props> = (props) => {
    return (
        <Meal key={props.mealFood.id}>
            <MealName>
                <>{props.mealFood.name ? props.mealFood.name : 'Неопределен'}</>
                <Gram>{props.mealFood.weight} г</Gram>
            </MealName>
            <BoxCalories>
                <Calories>{Math.ceil(props.mealFood.info.calories)}</Calories>
                <>ккал</>
            </BoxCalories>
        </Meal>
    );
};
