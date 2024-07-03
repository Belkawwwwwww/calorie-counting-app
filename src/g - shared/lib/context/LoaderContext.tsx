import {createContext, ReactNode, useMemo} from 'react';

const LoaderContext = createContext<boolean>(false);

export const LoaderProvider = ({children}: { children: ReactNode }) => {
    const memoizedChildren = useMemo(() => children, [children]);

    return (
        <LoaderContext.Provider value={false}>
            {memoizedChildren}
        </LoaderContext.Provider>
    );
};
