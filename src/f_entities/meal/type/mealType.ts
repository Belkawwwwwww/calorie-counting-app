import {
    CreateOrUpdateMealResponse,
    MealSchema,
} from '../model/createOrUpdateMealZod';

export type CreateMealResponse = typeof CreateOrUpdateMealResponse._output;
export type CreateOrUpdateMeal = typeof MealSchema._input;
