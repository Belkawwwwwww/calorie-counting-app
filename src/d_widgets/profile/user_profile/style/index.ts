import { Button } from '@/g_shared/ui/button';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledUserProfile = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;
export const Menu = styled.div`
    background: linear-gradient(
        109.6deg,
        rgb(231, 230, 214) 11.2%,
        rgb(206, 240, 185) 47.5%,
        rgb(100, 163, 111) 100.2%
    );
    border-radius: 0 0 29px 29px;
    width: 100%;
    height: 270px;
    @media (max-width: 480px) {
        height: 150px;
    }
`;
export const StyledLink = styled.div`
    display: flex;
    padding-top: 30px;
    justify-content: end;
`;
export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`;
export const PhotoContainer = styled.div`
    position: absolute;
    top: 169px;
    left: 86px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        top: 207px;
        left: 13px;
    }
    @media (max-width: 480px) {
        top: 119px;
        left: 13px;
    }
`;
export const PhotoWrapper = styled.div`
    width: 170px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(
            circle at left top,
            rgba(0, 255, 0, 1),
            rgba(0, 255, 0, 0) 60%
        ),
        radial-gradient(
            circle at right top,
            rgba(255, 0, 255, 1),
            rgba(255, 0, 255, 0) 30%
        ),
        radial-gradient(
            circle at left bottom,
            rgba(255, 192, 0, 1),
            rgba(255, 192, 0, 0) 70%
        ),
        radial-gradient(
            circle at right bottom,
            rgba(255, 0, 127, 1),
            rgba(255, 0, 127, 0) 30%
        ),
        radial-gradient(
            circle at left center,
            rgba(0, 255, 0, 0.5),
            rgba(255, 0, 255, 0.2) 50%
        ),
        radial-gradient(
            circle at right center,
            rgba(255, 192, 0, 0.5),
            rgba(255, 0, 127, 0.2) 50%
        );
    border-radius: 50%;
    border: solid 4px white;
    @media (max-width: 768px) {
        width: 140px;
        height: 140px;
    }
    @media (max-width: 480px) {
        width: 80px;
        height: 80px;
    }
`;
export const Photo = styled.div<{ src: string }>`
    width: 100px;
    height: 100px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    @media (max-width: 480px) {
        width: 60px;
        height: 60px;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    float: right;
    justify-content: center;
    flex-direction: column;
    position: relative;
    left: 30px;
    @media (max-width: 768px) {
        left: 0px;
    }
    @media (max-width: 480px) {
        left: 0px;
    }
`;
export const ContainerProfile = styled.div`
    display: flex;
`;

export const AboutProfile = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    margin-top: 40px;
    @media (max-width: 768px) {
        margin-top: 80px;
    }
    @media (max-width: 480px) {
        margin-top: 46px;
        margin-bottom: 7px;
    }
`;
export const Username = styled.div`
    text-transform: uppercase;
    font-weight: 200;
    font-size: 30px;
    @media (max-width: 480px) {
        font-size: 15px;
    }
`;
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const Btn = styled(Link)`
    margin: 0 auto;
    margin-top: 20px;
`;
export const BtnTest = styled(Link)`
    text-decoration: none;
    position: relative;
    top: -29px;
    padding-right: 10px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        display: flex;
        left: 0;
        top: -5px;
    }
    @media (max-width: 480px) {
        display: flex;
        left: 18px;
        top: -17px;
    }
`;

export const Block = styled.div`
    display: flex;
    margin-top: 300px;
    align-items: center;
    justify-content: center;
    @media (max-width: 480px) {
        margin-top: 100px;
    }
`;
export const ResponsiveButton = styled(Button)`
    width: auto;
    background-color: #89ac76;
    $btnWidth: 'l';
    $btnSquareSize: 'button--square--size-l';
    @media (max-width: 768px) {
        $btnWidth: 'xs';
        $btnSquareSize: 'button--square--size-s';
        padding: 14px 19px 15px 25px;
        width: 150px;
        height: 40px;
        font-size: 11px;
        display: flex;
        left: 10px;
    }
    @media (max-width: 480px) {
        $btnWidth: 'xs';
        $btnSquareSize: 'button--square--size-s';
        padding: 8px 16px;
        width: 100px;
        height: 40px;
        font-size: 11px;
        display: flex;
        left: 10px;
    }
`;
export const CreatePlanButton = styled(Button)`
    background-color: #89ac76;
    width: 400px;

    @media (max-width: 768px) {
        padding: 10px 20px;
        font-size: 14px;
        width: 300px;
        height: 40px;
    }

    @media (max-width: 480px) {
        padding: 8px 16px;
        font-size: 12px;
        width: 300px;
        height: 40px;
    }
`;

export const ProfileInfo = styled.div`
    display: grid;
`;
export const Criteria = styled.div`
    padding-top: 15px;
`;
