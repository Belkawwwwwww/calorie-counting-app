import { useMealDataContext } from '@/g_shared/lib/context/meal_context/MealContext';
import { Meal } from '@/g_shared/lib/type/nutritionTypes';
import { FC } from 'react';
import { MealFoodItem } from '../../meal_food_item';
import { Props } from '../type';
import { FoodEaten } from './style';

export const FoodEatenList: FC<Props> = (props) => {
    const { mealData, error } = useMealDataContext();
    const meal: Meal | undefined = mealData?.data?.find(
        (meal) => meal.meal_type === props.mealType
    );

    if (error) {
        return <p>Ошибка: {error}</p>;
    }

    return (
        <FoodEaten>
            {meal && meal.meal_foods ? (
                meal.meal_foods.map((mealFood) => (
                    <MealFoodItem key={mealFood.id} mealFood={mealFood} />
                ))
            ) : (
                <>Нет данных о приеме пищи</>
            )}
        </FoodEaten>
    );
};
