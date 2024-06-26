import {FC} from "react";
import styled from "styled-components";
import {PhoneNumber} from "@/e - features/contacts";
import {SocialMedia} from "@/e - features/contacts/components/SocialMeadia";

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  padding: 15px 100px 15px 100px;
  background-color: #89AC76;
  color: white;
  flex-wrap: wrap;
`
const StyledContainerTelephone = styled.div`


`
const StyledTelephone = styled.p`

`
const StyledContainerContacts = styled.div`

`


export const Footer: FC = () => {
    return (
        <StyledFooter>
            <StyledContainerTelephone>
                <StyledTelephone>Телефон</StyledTelephone>
                <PhoneNumber phoneNumber='+79826004039'/>
            </StyledContainerTelephone>
            <StyledContainerContacts>
                <SocialMedia/>

            </StyledContainerContacts>
        </StyledFooter>
    )
}