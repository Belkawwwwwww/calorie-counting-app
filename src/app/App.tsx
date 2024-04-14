import type {AppProps} from 'next/app'
import {StoreProvider} from "@/app/providers/store-providers/ui/StoreProvider";
import './styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <StoreProvider>
                <Component {...pageProps} />
        </StoreProvider>
    );
}