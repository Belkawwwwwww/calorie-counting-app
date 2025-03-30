import { FC } from 'react';
import { Props } from '../type';
import { Gram, Meal, MealName } from './style';

export const MealFoodItem: FC<Props> = (props) => {
    return (
        <Meal key={props.mealFood.id}>
            <MealName>
                <>{props.mealFood.name ? props.mealFood.name : 'Неопределен'}</>
                <Gram>{props.mealFood.weight} г</Gram>
            </MealName>
            <div>{Math.ceil(props.mealFood.info.calories)} ккал</div>
        </Meal>
    );
};
