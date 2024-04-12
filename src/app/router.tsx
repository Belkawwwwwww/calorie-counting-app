import React from 'react';
import {Route, Routes} from "react-router";
import {RouteEnum} from "@/g - shared/config/route-config";
import {ProtectedRoute} from "@/c - pages/protected-route";
import {LoginPage} from "@/c - pages/login";
import {RegisterPage} from "@/c - pages/registration";
import {HomePage} from "@/c - pages/home-page";
import {TestPage} from "@/c - pages/test-page";
import {NotFoundPage} from "@/c - pages/not-found-page";
import {BrowserRouter} from "react-router-dom";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={RouteEnum.LOGIN}
                    element={
                        <ProtectedRoute anonymous>
                            <LoginPage/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={RouteEnum.REGISTRATION}
                    element={
                        <ProtectedRoute anonymous>
                            <RegisterPage/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={RouteEnum.HOME}
                    element={
                        <ProtectedRoute anonymous>
                            <HomePage/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={RouteEnum.TEST}
                    element={
                        <ProtectedRoute anonymous>
                            <TestPage/>
                        </ProtectedRoute>
                    }
                />
                <Route path={RouteEnum.NOTFOUND} element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};
