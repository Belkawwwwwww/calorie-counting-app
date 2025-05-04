import { Image } from '@/g_shared/ui/image';
import styled from 'styled-components';

export const Opportunities = styled.div`
    position: relative;
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid var(--color-text3);
    justify-content: space-between;
    @media (max-width: 480px) {
        padding-top: 20px;
    }
`;
export const Counter = styled.div`
    flex: 0 1 calc(25% - 15px);
    text-align: center;
    padding-right: 15px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:last-child {
        padding-right: 0;
    }
    @media (max-width: 768px) {
        flex: 0 1 100%;
    }
    @media (max-width: 480px) {
        flex: 0 1 100%;
        padding-right: 0px;
    }
`;
export const ImageContainer = styled.div`
    width: 200px;
    height: 200px;
    background-size: cover;
    background-position: center;
    background-color: var(--color-text2);

    @media (max-width: 768px) {
        /* width: 727px; */
        /* height: auto; */
    }
     /* img {
        width: 100%;
        height: 100%;
    } */
    @media (max-width: 480px) {
        /* width: 100%; */
        /* height: auto; */
    }
    img {
        width: 100%;
        height: 100%;
    }
`;
export const H1 = styled.h1`
    font-size: 16px;
    margin-top: 25px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

`;
export const ImageContainer1 = styled.div`
    position: absolute;
    left: -10px;
    top: 218px;
    z-index: -1;
`
export const ImageContainer2 = styled.div`
    position: absolute;
    right: -48px;
    top: -42px;
    z-index: -1;
    float: right;
    @media (max-width: 480px) {
        right: -10px;
    }
    @media (max-width: 320px) {
        right: -10px;
    }
`
export const StyledImage = styled(Image)`
`;