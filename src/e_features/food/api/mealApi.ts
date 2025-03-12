import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiUrls } from '@/g_shared/model';
import {
    CreateMealResponse,
    CreateOrUpdateMeal,
} from '@/f_entities/meal/type/mealType';
import { FoodResponse } from '../type/foodTypes';

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
        // createFood: build.mutation<any, any>({
        //     query: (body) => ({
        //         url: '/api/v1/food',
        //         method: 'POST',
        //         body,
        //         credentials: 'include',
        //         keepUnusedDataFor: 120,
        //     }),
        // }),
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

export const { useGetUserMealQuery } = foodAPI;
export default foodAPI;
