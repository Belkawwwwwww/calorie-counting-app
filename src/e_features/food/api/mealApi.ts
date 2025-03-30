import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiUrls } from '@/g_shared/model';
import {
    CreateMealResponse,
    CreateOrUpdateMealSchema,
} from '@/f_entities/meal/model/mealType';
import { FoodResponse } from '../../meal/create_or_update_meal/type/foodTypesZod';
import {
    CreateFoodInput,
    CreateFoodResponse,
} from '@/e_features/food/create_food/type/createFoodTypes';

import { CreateFoodResponseSchema } from '@/e_features/food/create_food/lib/createFoodSchema';
import { handleResponse } from '@/g_shared/lib/utils';

const foodAPI = createApi({
    reducerPath: 'foodAPI',
    baseQuery: fetchBaseQuery({ baseUrl: ApiUrls.BASE_URL }),
    tagTypes: ['Food'],
    endpoints: (build) => ({
        getUserMeal: build.query<FoodResponse, string>({
            query: (date) => ({
                url: `api/v1/user/meal?date=${date}`,
                method: 'GET',
                credentials: 'include',
                keepUnusedDataFor: 120,
            }),
        }),
        // searchFoodOrProduct: build.query<any, any>({
        //     query:()=> ({
        //         url:
        //     })
        // }),
        createFood: build.mutation<CreateFoodResponse, CreateFoodInput>({
            query: (body) => ({
                url: '/api/v1/food',
                method: 'POST',
                body,
                credentials: 'include',
                keepUnusedDataFor: 120,
            }),
            transformErrorResponse: (response) =>
                handleResponse(response, CreateFoodResponseSchema),
        }),
        createOrUpdateMeal: build.mutation<
            CreateMealResponse,
            CreateOrUpdateMealSchema
        >({
            query: (body) => ({
                url: '/api/v1/user/meal',
                method: 'POST',
                body,
                credentials: 'include',
                keepUnusedDataFor: 120,
            }),
        }),
    }),
});

export const {
    useGetUserMealQuery,
    useCreateFoodMutation,
    useCreateOrUpdateMealMutation,
} = foodAPI;
export default foodAPI;
