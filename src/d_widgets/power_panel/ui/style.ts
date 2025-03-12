import styled from 'styled-components';

export const StyledSummaryBlock = styled.div`
    background-color: var(--color-background1);
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
    height: 270px;
    margin: 0 auto;
    color: white;
    padding-bottom: 10px;

    @media (max-width: 768px) {
        height: auto;
    }

    @media (max-width: 480px) {
        height: auto;
    }
`;

export const FirstBlock = styled.div`
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const Calories = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 23%;
    text-align: center;
    flex-direction: column;
    justify-content: center;
`;
export const BZU = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;

    @media (max-width: 780px) {
        padding-bottom: 10px;
    }

    @media (max-width: 480px) {
        padding-top: 10px;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Norm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

export const Purpose = styled.div`
    font-size: 15px;
    opacity: 50%;
    padding-top: 5px;
    @media (max-width: 480px) {
        font-size: 10px;
    }
`;
export const Cel = styled.div`
    font-size: 18px;
    @media (max-width: 480px) {
        font-size: 15px;
    }
`;
