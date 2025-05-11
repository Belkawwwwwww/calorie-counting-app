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
    border: 1px solid var(--color-text4);
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
    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
        img{
        width: 42px;
        height: 42px;
    }
    }
   
`;
export const BtnContainer = styled.div`
    display: flex;
    float: right;
    justify-content: center;
    flex-direction: column;
    position: relative;
    @media (max-width: 768px) {
        left: 0px;
    }
    @media (max-width: 480px) {
        left: 0px;
    }
`;