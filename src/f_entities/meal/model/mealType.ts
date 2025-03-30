import {
    CreateOrUpdateMealResponse,
    CreateOrUpdateMealSchema,
} from './createOrUpdateMealSchema';

export type CreateMealResponse = typeof CreateOrUpdateMealResponse._output;
export type CreateOrUpdateMealSchema = typeof CreateOrUpdateMealSchema._input;
