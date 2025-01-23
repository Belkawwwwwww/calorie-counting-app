import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiUrls } from '@/g_shared/model';
import { BzuResponse } from '../type/bzuTypes';

const bzuAPI = createApi({
    reducerPath: 'bzuAPI',
    baseQuery: fetchBaseQuery({ baseUrl: ApiUrls.BASE_URL }),
    endpoints: (build) => ({
        getBzu: build.query<BzuResponse, void>({
            query: () => ({
                url: 'api/v1/user/bzu',
                method: 'GET',
                providesTags: ['User'],
                credentials: 'include',
            }),
        }),
    }),
});

export const { useGetBzuQuery } = bzuAPI;
export default bzuAPI;
