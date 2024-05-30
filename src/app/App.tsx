import type { AppProps } from 'next/app';
import { StoreProvider } from '@/app/providers/store-providers/ui/StoreProvider';
import './styles/global.scss';
import { LoaderOverlayProvider } from '@/g - shared/lib/context';
import { Navbar } from '@/d - widgets/navbar';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { AppWrapper } from '@/app/providers/AppWrapper';

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
