// import {messengers} from '@/d - widgets/layouts/footer/config/messengers'
import {FC} from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  position: relative;
  border-top: 1px solid #eaeff2;
  align-items: center;
  display: flex;
  //justify-content: space-between;
  height: 88px;
  padding-left: 100px;
  padding-right: 100px;
  background-color: #89AC76;
`
const StyledContainerTelephone = styled.div`
  display: flex;
  justify-content: space-between;

`
const StyledTelephone = styled.p`

`
const StyledContainerContacts = styled.div`

`
const StyledContacts = styled.p`

`

export const Footer: FC = () => {
    return (
        <StyledFooter>
            {/*<Logo/>*/}
            <StyledContainerTelephone>
                <StyledTelephone>Телефон</StyledTelephone>
                <StyledTelephone>+79826004039</StyledTelephone>
            </StyledContainerTelephone>
            <StyledContainerContacts>
                <StyledContacts>Контакты:</StyledContacts>
                {/*<div>*/}
                        {/*{*/}
                        {/*    messengers.map((messenger) => (*/}
                        {/*        <Link*/}
                        {/*            key={messenger.path}*/}
                        {/*            href={messenger.link}*/}
                        {/*            target="_blank"*/}
                        {/*        >*/}
                        {/*            <Image*/}
                        {/*                src={`/messengers/${messenger.path}`}*/}
                        {/*                alt={messenger.path}*/}
                        {/*                width={40}*/}
                        {/*                height={40}*/}
                        {/*            />*/}
                        {/*        </Link>*/}
                        {/*    ))*/}
                        {/*}*/}
                {/*</div>*/}
            </StyledContainerContacts>
        </StyledFooter>
    )
}