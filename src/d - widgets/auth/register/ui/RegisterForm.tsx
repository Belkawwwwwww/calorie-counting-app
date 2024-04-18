import {FC, useState} from "react";
import styled from "styled-components";
import {InputWithRules} from "@/e - features/input-with-rules";
import {Button} from "@/g - shared/ui";
import Link from "next/link";
import {useAppSelector} from "@/g - shared/lib/store";

const StyledRFContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-left: 100px;
  //height: 100vh;
`
const StyledRFForm = styled.form`
  width: 400px;
`
const StyledRFTitle = styled.h1`
  font-weight: 200;
  font-size: 30px;
  color: #000000;
  display: block;
  margin-bottom: 22px;
  text-align: center;
`
const StyledRFInputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  box-sizing: border-box;
`
const StyledRFError = styled.div`
  color: red;
  margin: 10px;
  text-align: center;
`
const StyledRFLabel = styled.label`
  font-size: 14px;
  color: var(--color-text1);
  margin-top: 20px
`
const StyledRFBtn = styled.div`
  display: flex;
  align-items: center;
`
const StyledPasswordRecovery = styled.div`
  margin-left: 20px;
  color: #4689e8;
  cursor: pointer;
`
const StyledRFFooter = styled.div`
  display: flex;
`
const StyledLink = styled(Link)`
  color: #4689e8;;
  text-decoration: none;
  padding-left: 6px;
`;


export const RegisterForm: FC = () => {
    const error = useAppSelector(state => state.user.error);
    // const error = useAppSelector(errorUserSelector);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    return (
        <StyledRFContainer>
            <StyledRFForm>
                <StyledRFTitle>
                    Авторизация
                </StyledRFTitle>
                <StyledRFInputBox>
                    {error ? (
                        <StyledRFError>
                            {error}
                        </StyledRFError>
                    ) : null}
                    <>
                        <StyledRFLabel htmlFor="email">Email</StyledRFLabel>
                        <InputWithRules
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            rules={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                            text="Неверный формат почты"
                            type="text"
                            placeholder="Введите email"
                        />
                    </>
                    <>
                        <StyledRFLabel htmlFor="email">Пароль</StyledRFLabel>
                        <InputWithRules
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            rules={/.{8,}/}
                            text="Колличество символов должно быть больше 7"
                            type="password"
                            placeholder="Введите пароль"
                        />
                    </>

                </StyledRFInputBox>
            </StyledRFForm>
            <StyledRFBtn>
                <Button $variant="primary" $btnWidth="s" $btnSquareSize="button--square--size-m"
                        onClick={() => console.log("Clicked!")}>
                    Войти
                </Button>
                <StyledPasswordRecovery>Восстановление пароля</StyledPasswordRecovery>
            </StyledRFBtn>
            <StyledRFFooter>
                <div>Еще не зарегистрированы?</div>
                <StyledLink href='/registration'>Регистрация</StyledLink>
            </StyledRFFooter>
        </StyledRFContainer>
    )
}