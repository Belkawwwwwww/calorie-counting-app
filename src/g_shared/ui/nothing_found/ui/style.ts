import styled from "styled-components";
import { Image } from "../../image";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ImageNothingFound = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`
export const Title = styled.div`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
    
`
export const Text = styled.div`
    font-size: 13px;
    text-align: center;
    margin-bottom: 10px;
`
export const StyledImage = styled(Image)`
    & > img {
        width: 60px !important;
        height: auto !important;
    }
`;
