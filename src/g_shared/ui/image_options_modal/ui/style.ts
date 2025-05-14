import styled from "styled-components";

export const ModalButton = styled.button`
  background-color: var(--color-primary);
  /* color: white; */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
export const Container = styled.div`
    margin: 15px 0 ;
    display: flex;
    flex-direction: column;
`