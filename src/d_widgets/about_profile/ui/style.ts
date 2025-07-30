import styled from 'styled-components';

export const ContainerUsername = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    margin-top: 40px;
    @media (max-width: 768px) {
        /* margin-top: 80px; */
    }
    @media (max-width: 480px) {
        /* margin-top: 100px; */
        margin-bottom: 7px;
    }
`;
export const Username = styled.div`
    text-transform: uppercase;
    font-weight: 200;
    font-size: 30px;
    @media (max-width: 480px) {
        font-size: 15px;
    }
`;
