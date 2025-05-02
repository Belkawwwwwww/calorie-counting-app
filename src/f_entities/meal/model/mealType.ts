import {
    CreateOrUpdateMealResponse,
    CreateOrUpdateMealSchema,
} from '../../../g_shared/schema/createOrUpdateMealSchema';

export type CreateMealResponse = typeof CreateOrUpdateMealResponse._output;
export type CreateOrUpdateMealSchema = typeof CreateOrUpdateMealSchema._input;
