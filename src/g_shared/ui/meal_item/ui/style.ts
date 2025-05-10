import styled from 'styled-components';

export const Meal = styled.div`
    border: 1px solid rgb(181, 109, 91);
    border-radius: 8px;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    font-family: none;
    justify-content: space-between;
    &:hover {
        background-color: var(--color-text5);
    }
    cursor: pointer;
`;
