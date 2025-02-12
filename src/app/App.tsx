import type { AppProps } from 'next/app';
import './styles/global.scss';
import { Navbar } from '@/d_widgets/navbar';
import { AppProviders } from './providers/app_provider/AppProvider';
import { ErrorProvider } from '@/g_shared/lib/context';
import { RouteEnum } from '@/g_shared/model';
import { MemoizedLoader } from '@/g_shared/ui/loader';
import { MemoizedUserSessionLoader } from '@/e_features/auth';

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
