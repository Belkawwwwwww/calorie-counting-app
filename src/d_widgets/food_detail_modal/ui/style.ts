import styled from "styled-components";

export const AddBox = styled.div`
  color: var(--color-text1);
  width: 25px;
  height: 25px;
  cursor: pointer;
  border-radius: 50%;
  padding: 1px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  border: var(--color-text1) 2px solid;
`;

export const ThreeDotsButton = styled.div`
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
    
    &:before{
        position: absolute;
        content: "";
        top: 4px;
        left: 0;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: var(--color-text1);
        box-shadow: 8px 0 0 var(--color-text1), 16px 0 0 var(--color-text1);
}
`