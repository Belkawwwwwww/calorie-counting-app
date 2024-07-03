import {FC, ReactNode} from 'react';
import {useFetchUserSessionQuery} from '@/f - entities/api/authApi';
import {isPendingSelector} from '@/f - entities/redux/pending';
import {useAppSelector} from '@/g - shared/lib/store';

interface LoaderOverlayProps {
    children: ReactNode;
}

export const LoaderOverlay: FC<LoaderOverlayProps> = ({children}) => {
    const pending = useAppSelector(isPendingSelector);
    const {data, isFetching} = useFetchUserSessionQuery();

    console.log('Pending state:', isFetching);

    if (isFetching) {
        return (
            <div className="loader-overlay">
                <div className="loader">Loading...</div>
            </div>
        );
    }

    return <>{children}</>;
};
