import {useFetchUserSessionQuery} from '@/g - shared/api/authApi';
import {setAuth} from '@/f - entities/redux/session/modele/action/action';
import {useAppDispatch} from '@/g - shared/lib/store';
import {FC, ReactNode, useLayoutEffect, useState} from 'react';

export const AppWrapper: FC<{ children: ReactNode }> = ({children}) => {
    const {data, isLoading, error} = useFetchUserSessionQuery();
    const [isSessionChecked, setIsSessionChecked] = useState(false);
    const userId = data?.data.id;

    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        console.log('Начинается обработку данных...');
        try {
            if (!isLoading && !error && data) {
                const sessionId = sessionStorage.getItem('session_id');
                const userId = data.data.id;
                if (userId) {
                    if (sessionId !== userId) {
                        console.log('sessionId: ', sessionId);
                        console.log('userId: ', userId);
                        return;
                    }
                    if (data.response_status === 0) {
                        dispatch(setAuth(true));
                        console.log('sessionId: ', sessionId);
                        console.log('userId: ', userId);
                        console.log('response status ok');
                    }
                } else {
                    console.log('sessionId: ', sessionId);
                    console.log('userId: ', userId);
                    console.log('response status ne ok');
                    console.log(data.response_status);
                }
            }
            setIsSessionChecked(true);
        } catch (error) {
            console.error('Ошибка при обработке данных:', error);
        }
    }, [userId]);

    return isSessionChecked ? <>{children}</> : null;
};
