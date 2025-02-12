import styled from 'styled-components';

export const StyledUserProfile = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

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
export const ContainerProfile = styled.div`
    display: flex;
`;

export const AboutProfile = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    margin-top: 40px;
    @media (max-width: 768px) {
        margin-top: 80px;
    }
    @media (max-width: 480px) {
        margin-top: 46px;
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
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
