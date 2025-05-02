import styled from 'styled-components';

export const BZU = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;
export const Micronutrient = styled.div`
    font-size: 11px;
`;
export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 14px;
    position: relative;
    font-size: 15px;
    margin-bottom: 10px;
    margin-top: 10px;
    @media (max-width: 480px) {
        width: 330px;
        /* padding-left: 20px; */
    }
    @media (max-width: 320px) {
        width: 280px;
        /* padding-left: 17px; */
    }
`;
export const Value = styled.div`
    font-weight: 600;
`