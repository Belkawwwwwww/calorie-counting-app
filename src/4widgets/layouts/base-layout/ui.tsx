import {PropsWithChildren} from "react";
import {Header} from "@/4widgets/layouts";
import {Footer} from '@/4widgets/layouts'

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