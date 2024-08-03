import type {AppProps} from 'next/app';
import './styles/global.scss';
import {Navbar} from '@/d - widgets/navbar';
import {AppProviders} from './providers/app-provider/AppProvider';
import {MemoizedUserSessionLoader} from '@/e - features/user/UserSessionFetcher';
import React from 'react';
import {MemoizedLoader} from '@/g - shared/components/loader-overlay/LoaderOverlay';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppProviders>
            <MemoizedUserSessionLoader/>
            <MemoizedLoader>
                <Navbar/>
                <Component {...pageProps} />
            </MemoizedLoader>
        </AppProviders>
    );
}
