import type { AppProps } from 'next/app';
import './styles/global.scss';
import { Navbar } from '@/d - widgets/navbar';
import { AppProviders } from './providers/app-provider/AppProvider';
import { MemoizedUserSessionLoader } from '@/e - features/user/UserSessionFetcher';
import { MemoizedLoader } from '@/g - shared/components/loader-overlay/LoaderOverlay';
import { RouteEnum } from '@/g - shared/model/navigation';
import { ErrorProvider } from '@/g - shared/lib/context/ErrorContext';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ErrorProvider>
            <AppProviders>
                <MemoizedUserSessionLoader />
                <MemoizedLoader>
                    <Navbar hideOnPages={[RouteEnum.PROFILE]} />
                    <Component {...pageProps} />
                </MemoizedLoader>
            </AppProviders>
        </ErrorProvider>
    );
}
