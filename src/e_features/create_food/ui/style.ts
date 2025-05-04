import styled from 'styled-components';

export const CreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
`;
export const Plus = styled.div`
    /* float: right; */
    margin-right: 5px;
    width: 20px;
    height: 20px;
    background: linear-gradient(#89AC76, #89AC76), linear-gradient(#89AC76, #89AC76),
        transparent;
    background-position: center;
    background-size:
        50% 2px,
        2px 50%;
    background-repeat: no-repeat;
    border-radius: 10px;
    border: 2px solid #89AC76;
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
export const AddBox = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-text3);
    padding: 8px;
    margin-bottom: 15px;
`
