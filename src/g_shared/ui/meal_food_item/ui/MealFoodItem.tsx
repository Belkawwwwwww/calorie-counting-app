import { FC } from 'react';
import { Props } from '../type';
import { Gram, Meal, MealName } from './style';

export const MealFoodItem: FC<Props> = (props) => (
    <Meal key={props.mealFood.id}>
        <MealName>
            <>{props.mealFood.name}</>
            <Gram>{props.mealFood.weight} г</Gram>
        </MealName>
        <div>{props.mealFood.info.calories} ккал</div>
    </Meal>
);
