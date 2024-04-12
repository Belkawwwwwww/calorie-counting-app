import {PropsWithChildren} from "react";
import {Header} from "@/d - widgets/layouts";
import {Footer} from '@/d - widgets/layouts'

export const BaseLayout = ({children}: PropsWithChildren) => {
    return (
        <>
            <Header/>
            <main className="main">
                {children}
            </main>
            <Footer/>
        </>
    );
};