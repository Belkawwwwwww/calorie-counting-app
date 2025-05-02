import styled from 'styled-components';

export const Opportunities = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid var(--color-background1);
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
    width: 100%;
    height: 150px;
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        width: 727px;
        height: auto;
    }
     /* img {
        width: 100%;
        height: 100%;
    } */
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
    img {
        width: 100%;
        height: 100%;
    }
`;
export const H1 = styled.h1`
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

`;
