import styled from 'styled-components';

export const ImageBlock = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;
export const ImageText = styled.div`
    font-size: 12px;
    opacity: 50%;
`;
export const ImageContainer = styled.div`
    background-size: cover;
    background-position: center;
    margin: 10px 15px 10px 15px;
    @media (max-width: 768px) {
        width: 23px;
        height: 23px;
        margin: 5px 10px 5px 10px;
    }
    @media (max-width: 480px) {
        width: 20px;
        height: 20px;
        margin: 0px 5px 0px 5px;
    }
    img {
        width: 30px;
        height: 30px;
    }
`;
