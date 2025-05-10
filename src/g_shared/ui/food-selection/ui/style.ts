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

export const CategoryName = styled.div`
    font-size: 11px;
`