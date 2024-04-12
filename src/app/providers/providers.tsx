import {Provider} from "react-redux";
import {store} from "@/app/store";
import {FC, ReactNode} from "react";

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

