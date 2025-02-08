import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiUrls } from '@/g_shared/model';
import { FoodResponse } from '../type/foodTypes';
import { FoodResponseSchema } from '../model/getUserMeal';

const foodAPI = createApi({
    reducerPath: 'foodAPI',
    baseQuery: fetchBaseQuery({ baseUrl: ApiUrls.BASE_URL }),
    endpoints: (build) => ({
        getUserMeal: build.query<FoodResponse, string>({
            query: (date) => ({
                url: `api/v1/user/meal?date=${date}`,
                method: 'GET',
                credentials: 'include',
            }),
            transformResponse: (response: unknown) => {
                const parsedResponse = FoodResponseSchema.parse(response);
                return {
                    response_status: parsedResponse.response_status,
                    data: parsedResponse.data,
                    error: parsedResponse.error,
                };
            },
        }),
    }),
});

export const { useGetUserMealQuery } = foodAPI;
export default foodAPI;
