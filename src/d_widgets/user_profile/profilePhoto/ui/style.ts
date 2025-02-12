import styled from 'styled-components';

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
export const Photo = styled.div`
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
    @media (max-width: 480px) {
        width: 60px;
        height: 60px;
    }
`;
