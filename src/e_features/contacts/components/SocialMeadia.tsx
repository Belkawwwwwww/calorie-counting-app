import styled from 'styled-components';
import Telegram from '../../../g - shared/assets/Icon/telegram.svg';
// import TelegramIcon from '../../assets/icons/telegram.svg';

const StyledUl = styled.ul``;
const StyledA = styled.a``;
const StyledSvg = styled.svg``;
export const SocialMedia = () => {
    return (
        <StyledUl>
            <StyledA>
                {/*<img src={TelegramIcon} alt="Telegram Icon" />*/}

                {/* <Icon svg={Telegram}/> */}
            </StyledA>
        </StyledUl>
    );
};
