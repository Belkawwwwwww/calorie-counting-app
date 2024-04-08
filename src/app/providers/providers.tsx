import {FC, ReactNode} from "react";
import {Provider} from "react-redux";
import {store} from "@/app/store";

interface IProviders {
    readonly children: ReactNode
}

export const Providers: FC<IProviders> = ({children}) => {
    return (
        // <ErrorBoundary errorComponent={#}>
        <Provider store={store}>
            {children}
        </Provider>
        // </ErrorBoundary>
    )
}