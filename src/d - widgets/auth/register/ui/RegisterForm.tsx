import {FC, useState} from "react";
import {useForm} from 'react-hook-form';
import {RegistrationDataSchema} from "@/f - entities/registration/model/registrationSchema";
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import styled from "styled-components";
import {InputWithRules} from "@/e - features/input-with-rules";
import Link from "next/link";
import {Button} from "@/g - shared/ui/Button";
import {RouteEnum} from "@/g - shared/model/navigation";

const StyledRFContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  //height: 100vh;
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
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`

const StyledRFFooter = styled.div`
  margin-left: 10px;
  display: flex;
`
const StyledLink = styled(Link)`
  color: #4689e8;;
  text-decoration: none;
  padding-left: 6px;
`;

export const RegisterForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConfirm, setPasswordConfirm] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const {register, handleSubmit, formState: {errors}} = useForm<z.infer<typeof RegistrationDataSchema>>({
        resolver: zodResolver(RegistrationDataSchema),
    });


    return (
        <StyledRFContainer>
            <StyledRFInputBox>
                {/*{error ? (*/}
                {/*    <StyledRFError>*/}
                {/*        {error.message}*/}
                {/*    </StyledRFError>*/}
                {/*) : null}*/}
                <StyledRFLabel htmlFor="email">Email</StyledRFLabel>
                <InputWithRules
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    rules={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                    text="Неверный формат почты"
                    type="text"
                    placeholder="Введите email"
                    required
                />
                <StyledRFLabel htmlFor="email">Пароль</StyledRFLabel>
                <InputWithRules
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    rules={/.{8,}/}
                    text="Колличество символов должно быть больше 7"
                    type="password"
                    placeholder="Введите пароль"
                    required
                />
                <StyledRFLabel htmlFor="email">Подтверждение пароля</StyledRFLabel>
                <InputWithRules
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    value={passwordConfirm}
                    rules={/.{8,}/}
                    text="Количество символов должно быть больше 7"
                    type="password"
                    placeholder="Подтвердите пароль"
                    required
                />
                <StyledRFLabel htmlFor="email">Ваше имя</StyledRFLabel>
                <InputWithRules
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    // rules={/.{8,}/}
                    text="null"
                    type="text"
                    placeholder="Введите ваше имя"
                    required
                />
                <StyledRFLabel htmlFor="email">Ваша фамилия</StyledRFLabel>
                <InputWithRules
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    // rules={/.{8,}/}
                    text="null"
                    type="text"
                    placeholder="Введите вашу фамилию"
                    required
                />
            </StyledRFInputBox>
            <StyledRFBtn>
                <Button $variant="primary" $btnWidth="m" $btnSquareSize="button--square--size-m"
                        onClick={() => console.log("Clicked!")}>
                    Зарегистрироваться
                </Button>

            </StyledRFBtn>
            <StyledRFFooter>
                <div>Уже есть аккаунт?</div>
                <StyledLink href={RouteEnum.LOGIN}>Вход</StyledLink>
            </StyledRFFooter>
            {/*<form>*/}
            {/*    <label htmlFor="firstName">First Name:</label>*/}
            {/*    <input type="text" {...register('firstName')} />*/}
            {/*    <label htmlFor="lastName">Last Name:</label>*/}
            {/*    <input type="text" {...register('lastName')} />*/}
            {/*</form>*/}
        </StyledRFContainer>


    )
}