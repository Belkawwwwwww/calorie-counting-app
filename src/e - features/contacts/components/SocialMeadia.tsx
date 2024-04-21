import styled from "styled-components";
import Telegram from '../../../g - shared/assets/Icon/telegram.svg'
import {Icon} from "@/g - shared/icon";

const StyledUl = styled.ul`
`
const StyledA = styled.a`

`
const StyledSvg = styled.svg`

`
export const SocialMedia = () => {
    return (
        <StyledUl>
            <StyledA>
                <Icon svg={Telegram}/>
            </StyledA>
        </StyledUl>
    )
}