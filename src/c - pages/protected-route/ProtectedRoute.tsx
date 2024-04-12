import React, {FC, ReactNode} from 'react';
import {useAppSelector} from "@/g - shared/lib/store";
import {isSessionSelector} from "@/f - entities/session";
import {Navigate} from "react-router";
import {RouteEnum} from "@/g - shared/config/route-config";

type ProtectedRouteProps = {
    children: ReactNode;
    anonymous?: boolean;
}
export const ProtectedRoute: FC<ProtectedRouteProps> = ({children, anonymous = false,}) => {
    const is_authenticated = useAppSelector(isSessionSelector);
    if (anonymous && is_authenticated) {
        return <Navigate to={RouteEnum.MAIN}/>
    }
    if (!anonymous && !is_authenticated) {
        return <Navigate to={RouteEnum.HOME}/>
    }
    return children
};
