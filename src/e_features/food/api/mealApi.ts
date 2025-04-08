import { ApiResponse, defaultApiResponse } from '../../search_food/lib/searchFoodSchema';
import { CreateFoodResponseSchema } from '@/e_features/food/create_food/lib/createFoodSchema';
import {
    CreateFoodInput,
    CreateFoodResponse,
} from '@/e_features/food/create_food/type/createFoodTypes';
import {
    CreateMealResponse,
    CreateOrUpdateMealSchema,
} from '@/f_entities/meal/model/mealType';
import { handleResponse } from '@/g_shared/lib/utils';
import { ApiUrls } from '@/g_shared/model';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FoodResponse } from '../../create_or_update_meal/type/foodTypesZod';


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
        searchFoodOrProduct: build.query<ApiResponse, string | null>({
            query: (query) => ({
                url: `/api/v1/search/product?str=${query}`,
                method: 'GET',
                credentials: 'include',
                params: {
                    name: query,
                }
            }),
            transformResponse: (response: ApiResponse | undefined): ApiResponse => {
                return response ? response : defaultApiResponse;
            },


        }),
    }),
});

export const {
    useGetUserMealQuery,
    useCreateFoodMutation,
    useCreateOrUpdateMealMutation,
    useSearchFoodOrProductQuery
} = foodAPI;
export default foodAPI;
