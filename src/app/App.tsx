import { Navbar } from '@/d_widgets/navbar_main';
import { MemoizedLoader } from '@/e_features/pending/ui';
import { ErrorProvider } from '@/g_shared/lib/context';
import type { AppProps } from 'next/app';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProviders } from './providers/app_provider';
import './styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ErrorProvider>
            <AppProviders>
                <ToastContainer
                    position='bottom-right'
                    autoClose={2000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='light'
                    transition={Slide}
                />
                <MemoizedLoader>
                    <Navbar />
                    <Component {...pageProps} />
                </MemoizedLoader>
            </AppProviders>
        </ErrorProvider>
    );
}
