import React, {FC} from 'react';
import AuthLayout from "@/c - pages/isAuth";
import styled from "styled-components";
import {Layout} from "@/g - shared/ui/layout";
import {Calendar} from "@/d - widgets/MainPage/Calendar";
import {MainBlock} from "@/d - widgets/MainPage/MainBlock";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`
const StyledDateNow = styled.div`
  font-size: 20px;
`
export const MainPage: FC = () => {
    return (
        <AuthLayout>
            <Layout>
                <StyledHeader>
                    <StyledDateNow>Сегодня</StyledDateNow>
                    <Calendar/>
                </StyledHeader>
                <MainBlock/>
            </Layout>

        </AuthLayout>

    );
};

