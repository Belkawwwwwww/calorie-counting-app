import {
    CreateOrUpdateMealResponse,
    MealSchema,
} from './createOrUpdateMealSchema';

export type CreateMealResponse = typeof CreateOrUpdateMealResponse._output;
export type CreateOrUpdateMeal = typeof MealSchema._input;
