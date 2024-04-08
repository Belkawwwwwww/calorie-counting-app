import type {AppProps} from 'next/app'
import {Providers} from "@/app/providers/providers";

export default function App({ Component, pageProps }: AppProps & { Component: { layout: any }}) {
    const Layout = Component.layout || (({ children } : { children: React.ReactNode }) => <>{children}</>);
    return (
        <Providers>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Providers>
    );
}