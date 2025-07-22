import { useGetBzuQuery } from '../api/bzuApi';

export const useGetBzu = (date: string) => {
    const { data, isLoading, refetch } = useGetBzuQuery(date);
    return { data, isLoading , refetch};
};
