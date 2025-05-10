import styled from "styled-components";

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