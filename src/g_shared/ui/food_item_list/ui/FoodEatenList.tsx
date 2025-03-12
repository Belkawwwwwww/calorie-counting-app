import { FC } from 'react';
import { FoodEaten } from './style';
import { Props } from '../type';
import { MealFoodItem } from '../../meal_food_item';

export const FoodEatenList: FC<Props> = (props) => {
    return (
        <FoodEaten>
            {props.mealFoods ? (
                props.mealFoods?.meal_foods.map((mealFood) => (
                    <MealFoodItem key={mealFood.id} mealFood={mealFood} />
                ))
            ) : (
                <>Нет данных о приеме пищи</>
            )}
        </FoodEaten>
    );
};
