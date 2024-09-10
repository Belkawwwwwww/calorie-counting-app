import { useFetchUserSessionQuery } from '@/g - shared/api/authApi';
import { setAuth } from '@/f - entities/redux/session/modele/action/action';
import { setPending } from '@/f - entities/redux/pending/modele/action/action';
import { useAppDispatch } from '@/g - shared/lib/store';
import React, { useEffect, useRef } from 'react';
import { setUser } from '@/f - entities/redux/user/model/action/action';

const UserSessionLoader: React.FC = () => {
    const dispatch = useAppDispatch();
    const { data, isSuccess, isError, isLoading } = useFetchUserSessionQuery();
    const prevData = useRef<typeof data | null>(null);

    useEffect(() => {
        const delayedDispatch = setTimeout(() => {
            if (isLoading) {
                dispatch(setPending(true));
            } else if (isSuccess) {
                dispatch(setPending(false));
                if (data?.response_status === 0) {
                    if (
                        prevData.current === null ||
                        JSON.stringify(prevData.current) !==
                            JSON.stringify(data)
                    ) {
                        prevData.current = data;
                        dispatch(setAuth(true));
                        dispatch(setUser(data.data.id));
                    }
                } else if (isError) {
                    dispatch(setAuth(false));
                }
            }
        }, 300);

        return () => clearTimeout(delayedDispatch);
    }, [data]);
    return null;
};

export const MemoizedUserSessionLoader = React.memo(UserSessionLoader);
