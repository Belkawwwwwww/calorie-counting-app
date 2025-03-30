import { FC } from 'react';
import { FoodEaten } from './style';
import { Props } from '../type';
import { MealFoodItem } from '../../meal_food_item';
import { useMealDataContext } from '@/g_shared/lib/context/meal_context/MealContext';
import { Meal } from '@/g_shared/lib/type/nutritionTypes';
import { LoadingIndicator } from '../../loader';

export const FoodEatenList: FC<Props> = (props) => {
    const { mealData, isLoading, error } = useMealDataContext();
    const meal: Meal | undefined = mealData?.data?.find(
        (meal) => meal.meal_type === props.mealType
    );
    if (isLoading) {
        return <LoadingIndicator />;
    }

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
