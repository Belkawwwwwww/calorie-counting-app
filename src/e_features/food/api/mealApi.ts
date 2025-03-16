import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiUrls } from '@/g_shared/model';
import {
    CreateMealResponse,
    CreateOrUpdateMeal,
} from '@/f_entities/meal/model/mealType';
import { FoodResponse } from '../type/foodTypes';
import {
    CreateFoodInput,
    CreateFoodResponse,
} from '@/f_entities/food/model/createFoodTypes';
import { handleResponse } from '@/g_shared/lib/utils/responseHandler';
import { CreateFoodResponseSchema } from '@/f_entities/food/model/createFoodSchema';

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
        // createOrUpdateMeal: build.mutation<
        //     CreateMealResponse,
        //     CreateOrUpdateMeal
        // >({
        //     query: (body) => ({
        //         url: '/api/v1/user/meal',
        //         method: 'POST',
        //         body,
        //         credentials: 'include',
        //         keepUnusedDataFor: 120,
        //     }),
        // }),
    }),
});

export const { useGetUserMealQuery, useCreateFoodMutation } = foodAPI;
export default foodAPI;
