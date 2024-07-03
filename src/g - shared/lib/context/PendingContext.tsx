import {createContext, FC, PropsWithChildren, useState} from 'react';

interface PendingContextValue {
    isPending: boolean;
    setPending: (pending: boolean) => void;
}

export const PendingContext = createContext<PendingContextValue>({
    isPending: false,
    setPending: () => {
    },
});

export const PendingProvider: FC<PropsWithChildren> = ({children}) => {
    const [isPending, setPending] = useState(false);

    return (
        <PendingContext.Provider value={{isPending, setPending}}>
            {children}
        </PendingContext.Provider>
    );
};
