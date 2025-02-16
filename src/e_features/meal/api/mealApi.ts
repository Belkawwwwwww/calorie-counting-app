import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiUrls } from '@/g_shared/model';
import { FoodResponse } from '../type/foodTypes';

const foodAPI = createApi({
    reducerPath: 'foodAPI',
    baseQuery: fetchBaseQuery({ baseUrl: ApiUrls.BASE_URL }),
    endpoints: (build) => ({
        getUserMeal: build.query<FoodResponse, string>({
            query: (date) => ({
                url: `api/v1/user/meal?date=${date}`,
                method: 'GET',
                credentials: 'include',
                providesTags: ['Food'],
                keepUnusedDataFor: 120,
            }),
        }),
    }),
});

export const { useGetUserMealQuery } = foodAPI;
export default foodAPI;
