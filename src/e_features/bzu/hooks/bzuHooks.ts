import { useGetBzuQuery } from '../api/bzuApi';

export const useGetBzu = () => {
    const { data, isLoading } = useGetBzuQuery();
    return { data, isLoading };
};
