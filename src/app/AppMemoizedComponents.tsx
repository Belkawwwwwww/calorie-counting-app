import {AuthStateUpdater} from '@/e - features/auth/AuthStateUpdater';
import {UserSessionFetcher} from '@/e - features/user/UserSessionFetcher';
import {PendingStateUpdater} from '@/g - shared/components/PendingStateUpdater';

export const AppMemoizedComponents = () => {
    console.log('отработал AppMemo');
    return (
        <>
            <PendingStateUpdater/>
            <AuthStateUpdater/>
            <UserSessionFetcher/>
        </>
    );
};
