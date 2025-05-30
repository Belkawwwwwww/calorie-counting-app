import styled from 'styled-components';

export const AddButtonContainer = styled.div<{ centered?: boolean }>`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: ${({ centered }) => (centered ? 'center' : 'flex-start')};
    @media (max-width: 768px) {
        /* margin-left: 115px; */
    }
    @media (max-width: 480px) {
        margin-left: 0px;
    }
    @media (max-width: 320px) {
        margin-left: 25px;
    }
`;
export const Plus = styled.div`
    width: 35px;
    height: 35px;
    cursor: pointer;
    background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
        #89ac76;
    background-position: center;
    background-size:
        50% 2px,
        2px 50%;
    background-repeat: no-repeat;
    border-radius: 10px;
    top: -26px;
    left: 83px;
    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
        left: 60px;
        top: -23px;
    }
    @media (max-width: 480px) {
        width: 25px;
        height: 25px;
        left: 39px;
        top: -21px;
    }
`;
