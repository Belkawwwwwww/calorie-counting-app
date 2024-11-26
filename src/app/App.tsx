import type { AppProps } from 'next/app';
import './styles/global.scss';
import { Navbar } from '@/d - widgets/navbar';
import { AppProviders } from './providers/app-provider/AppProvider';
import { ErrorProvider } from '@/g - shared/lib/context';
import { RouteEnum } from '@/g - shared/model';
import { MemoizedUserSessionLoader } from '@/e - features/user';
import { MemoizedLoader } from '@/g - shared/components/loader-overlay';

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
