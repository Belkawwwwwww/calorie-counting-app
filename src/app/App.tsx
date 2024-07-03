import type {AppProps} from 'next/app';
import './styles/global.scss';
import {Navbar} from '@/d - widgets/navbar';
import {AppProviders} from './providers/app-provider/AppProvider';
import {LoaderOverlay} from '@/g - shared/components/loader-overlay';
import {AppMemoizedComponents} from './AppMemoizedComponents';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppProviders>
            <LoaderOverlay>
                <AppMemoizedComponents/>
                <Navbar/>
                <Component {...pageProps} />
                {/*<Footer/>*/}
            </LoaderOverlay>
        </AppProviders>
    );
}
