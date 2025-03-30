import {
    MealData,
    MealDataParams,
} from '../../../../g_shared/lib/type/createOrUpdateTypes';

export const formatMealData = (params: MealDataParams): MealData => {
    const { day, food, meal_type } = params;
    return {
        day,
        food: food.map(({ id, weight, type }) => ({
            type: type as 'product' | 'food',
            id: Number(id),
            weight: Number(weight),
        })),
        meal_type: meal_type,
    };
};
