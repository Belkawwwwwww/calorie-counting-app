import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProductList = styled.div`
    padding: 10px 10px 10px 10px;
    border: 1px solid #eaeff2;
    border-radius: 4px;
    box-shadow: 0 0px 3px #eaeff2;
    margin-bottom: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
`
export const Box = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* font-size: 11px; */
    
`
export const ProductName = styled.div`
    font-weight: bold;
`
export const Plus = styled.div`
    float: right;
    width: 27px;
    height: 27px;
    cursor: pointer;
    background: linear-gradient(var(--color-text1), var(--color-text1)), linear-gradient(var(--color-text1), var(--color-text1)),
        transparent;
    background-position: center;
    background-size:
        50% 2px,
        2px 50%;
    background-repeat: no-repeat;
    border-radius: 10px;
    border: 2px solid var(--color-text1);
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
export const CategoryName = styled.div`
    font-size: 11px;
`