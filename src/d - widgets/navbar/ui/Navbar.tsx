import {useAppSelector} from "@/g - shared/lib/store";
import styled from "styled-components";
import {Logo} from "@/g - shared/ui/Logo";
import {FC} from "react";


const StyledHeader = styled.div`
  position: relative;
  border-bottom: 1px solid #eaeff2;
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 88px;
  padding-left: 100px;
  padding-right: 100px;
`
const StyledIcons = styled.img`

`


export const Navbar: FC = () => {
    const isAuth = useAppSelector(state => state.session.is_authenticated);

    return (
        <StyledHeader>
            <Logo/>
            {!isAuth ? (
                <></>
            ) : (
                <StyledIcons src="" alt="profile-icons"/>
            )}
        </StyledHeader>
    )
};

