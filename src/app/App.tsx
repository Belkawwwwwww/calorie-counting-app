import type {AppProps} from 'next/app'
import {StoreProvider} from "@/app/providers/store-providers/ui/StoreProvider";
import './styles/global.scss'
import {LoaderOverlayProvider} from "@/g - shared/lib/context";
import {Navbar} from "@/d - widgets/navbar";
import {Footer} from "@/d - widgets/layouts";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <StoreProvider>
            <LoaderOverlayProvider>
                <Navbar/>
                <Component {...pageProps} />
                <Footer/>
            </LoaderOverlayProvider>
        </StoreProvider>
    );
}