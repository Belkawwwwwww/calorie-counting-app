import { MealResponseSchema } from '../model/getUserMeal';

export type FoodResponse = typeof MealResponseSchema._output;
