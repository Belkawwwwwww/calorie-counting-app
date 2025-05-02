import {
    CreateFoodResponseSchema,
    createFoodScheme,
} from '../lib/createFoodSchema';

export type CreateFoodResponse = typeof CreateFoodResponseSchema._output;
export type CreateFoodInput = typeof createFoodScheme._input;
