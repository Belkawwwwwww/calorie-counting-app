import styled from 'styled-components';

export const ProductList = styled.div`
    padding: 10px 0px 10px 10px;
    border-bottom: 1px solid var(--color-text3);
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
`
export const CategoryName = styled.div`
    font-size: 11px;
`
export const RightBox = styled.div`
    display: flex;
    @media (max-width: 480px) {
        font-size: 12px;
    }
    
`
export const Delete = styled.div`
    margin-left: 10px;
    color: white;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    background-color: red;
    padding: 2px;
    text-align: center;
    font-size: 13px;
`

export const Void = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 170px;
    margin: auto;
    color: var(--color-text1)
`
export const Name = styled.div`
    @media (max-width: 780px) {
        width: 340px;
    }
    @media (max-width: 480px) {
        font-size: 12px;
        width: 210px;
    }
    
`