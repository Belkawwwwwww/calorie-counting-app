import styled from 'styled-components';

export const Title = styled.h1`
    font-weight: 200;
    font-size: 30px;
    color: #000000;
    display: block;
    margin-bottom: 22px;
    text-align: center;
`;

export const Options = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    @media (max-width: 780px) {
        flex-wrap: wrap;
    }
    @media (max-width: 480px) {
        flex-wrap: wrap;
    }
`;

export const Option = styled.div<{ isSelected: boolean }>`
    width: 150px;
    height: 150px;
    border: 1px solid #89ac76;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: ${(props) =>
        props.isSelected ? '#ebebeb' : 'transparent'};
    text-align: center;
    &:hover {
        background-color: #ebebeb;
    }
    @media (max-width: 780px) {
        width: 400px;
        height: 60px;
        font-size: 12px;
    }
    @media (max-width: 480px) {
        width: 300px;
        height: 60px;
        font-size: 12px;
    }
`;

export const Container = styled.div`
    /* width: 400px; */
`;
