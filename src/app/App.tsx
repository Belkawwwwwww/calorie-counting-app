import type {AppProps} from 'next/app';
import './styles/global.scss';
import {LoaderOverlayProvider} from '@/g - shared/lib/context';
import {Navbar} from '@/d - widgets/navbar';
import {StyleSheetManager} from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import {AppWrapper} from '@/app/protected/AppWrapper';
import {StoreProvider} from './providers/store-providers/ui/StoreProvider';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <StoreProvider>
            <AppWrapper>
                <StyleSheetManager shouldForwardProp={isPropValid}>
                    <LoaderOverlayProvider>
                        <Navbar />
                        <Component {...pageProps} />
                        {/*<Footer/>*/}
                    </LoaderOverlayProvider>
                </StyleSheetManager>
            </AppWrapper>
        </StoreProvider>
    );
}
