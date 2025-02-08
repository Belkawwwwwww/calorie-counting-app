import { useGetBzuQuery } from '../api/bzuApi';

export const useGetBzu = (date: string) => {
    const { data, isLoading } = useGetBzuQuery(date);
    return { data, isLoading };
};
