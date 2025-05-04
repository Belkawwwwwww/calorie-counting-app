import styled from 'styled-components';

export const PhotoContainer = styled.div`
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
    background-color: var(--color-text2);
    border-radius: 50%;
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
        width: 40px;
        height: 40px;
        img{
        width: 42px;
        height: 42px;
    }
    }
   
`;
export const ContainerUsername = styled.div`
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
