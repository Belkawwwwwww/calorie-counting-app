import React, {createContext, FC, ReactNode, useContext, useState} from "react";

interface LoaderContextType {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

export const LoaderOverlayProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    return (
        <LoaderContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </LoaderContext.Provider>
    )
}

export const useLoading = (): LoaderContextType => {
    const context = useContext(LoaderContext)
    if (!context) {
        throw new Error('error')
    }
    return context
}