import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
`;
export const Measurements = styled.div`
    padding-right: 30px;
`;
export const Plus = styled.div`
    position: absolute;
    display: inline-block;
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
export const Block = styled.div`
    flex-direction: column;
    position: relative;
    @media (max-width: 768px) {
        margin-top: 10px;
    }
    @media (max-width: 480px) {
        left: 16px;
        margin-top: 0px;
    }
`;
export const ContainerImage = styled.div`
    display: flex;
    border-radius: 10px;
    border: 1px solid var(--color-background1);
    width: auto;
    padding: 10px;
    position: relative;
    @media (max-width: 768px) {
        /* padding: 5px; */
    }
    @media (max-width: 480px) {
        padding: 5px;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        position: absolute;
        left: 35px;
    }
`;
