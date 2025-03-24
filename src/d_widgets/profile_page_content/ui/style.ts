import styled from 'styled-components';

export const BtnContainer = styled.div`
    display: flex;
    float: right;
    justify-content: center;
    flex-direction: column;
    position: relative;
    left: 30px;
    @media (max-width: 768px) {
        left: 0px;
    }
    @media (max-width: 480px) {
        left: 0px;
    }
`;
