import type {AppProps} from 'next/app'
import {StoreProvider} from "@/app/providers/store-providers/ui/StoreProvider";
import './styles/global.scss'
import {LoaderOverlayProvider} from "@/g - shared/lib/context";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <StoreProvider>
            <LoaderOverlayProvider>
                <Component {...pageProps} />
            </LoaderOverlayProvider>
        </StoreProvider>
    );
}