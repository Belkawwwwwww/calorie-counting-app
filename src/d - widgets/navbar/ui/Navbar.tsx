import { useAppSelector } from '@/g - shared/lib/store';
import styled from 'styled-components';
import { Logo } from '@/g - shared/ui/Logo';
import { FC } from 'react';
import Link from 'next/link';
import { RouteEnum } from '@/g - shared/model/navigation';

const StyledHeader = styled.header`
    position: relative;
    border-bottom: 1px solid #eaeff2;
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 88px;
    padding-left: 100px;
    padding-right: 100px;
`;
const StyledIcons = styled.img``;

export const Navbar: FC = () => {
    const isAuth = useAppSelector((state) => state.session.is_authenticated);

    return (
        <StyledHeader>
            <Logo />
            {!isAuth ? (
                <></>
            ) : (
                <Link href={RouteEnum.PROFILE}>
                    <StyledIcons src="" alt="profile-icons" />
                </Link>
            )}
        </StyledHeader>
    );
};
