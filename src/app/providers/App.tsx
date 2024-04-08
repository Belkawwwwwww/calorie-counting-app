import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {store} from "@/7shared/store";

export default function App({ Component, pageProps }: AppProps & { Component: { layout: any }}) {
    const Layout = Component.layout || (({ children } : { children: React.ReactNode }) => <>{children}</>);
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}