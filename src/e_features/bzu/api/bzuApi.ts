import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiUrls } from '@/g_shared/model';
import { BzuResponse } from '../../../f_entities/bzu/type/bzuTypes';
import { GetBzuResponseSchema } from '../../../f_entities/bzu/model/getBzu';

const bzuAPI = createApi({
    reducerPath: 'bzuAPI',
    baseQuery: fetchBaseQuery({ baseUrl: ApiUrls.BASE_URL }),
    endpoints: (build) => ({
        getBzu: build.query<BzuResponse, string>({
            query: (date) => ({
                url: `api/v1/user/bzu?date=${date}`,
                method: 'GET',
                credentials: 'include',
            }),
            transformResponse: (response: unknown) => {
                // Парсим ответ через Zod
                const parsedResponse = GetBzuResponseSchema.parse(response);

                // Возвращаем полный объект согласно структуре ответа
                return {
                    response_status: parsedResponse.response_status,
                    data: parsedResponse.data,
                    error: parsedResponse.error,
                };
            },
        }),
    }),
});

export const { useGetBzuQuery } = bzuAPI;
export default bzuAPI;
