import { CreateOrUpdateMealResponse } from '@/f_entities/meal/model/createOrUpdateMealZod';

export type FoodResponse = typeof CreateOrUpdateMealResponse._output;
