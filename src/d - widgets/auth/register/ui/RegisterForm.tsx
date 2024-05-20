import React, {useState} from 'react';
import styled from 'styled-components';
import {useRegisterUserMutation} from '@/g - shared/api/authApi';
import {Input} from '@/g - shared/ui/Input';
import {Button} from '@/g - shared/ui/Button';
import {RouteEnum} from '@/g - shared/model/navigation';
import Link from 'next/link';
import {useDispatch} from 'react-redux';
import {setAuthenticated} from '@/f - entities/session/modele/slice/session';
import {RegistrationResponseSchema, RegScheme,} from '@/f - entities/auth/model/registrationSchema';
import {z} from 'zod';

const StyledRFContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  //height: 100vh;
`;
const StyledRFInputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  box-sizing: border-box;
  
`;
const StyledRFError = styled.div`
  color: red;
`;

const StyledRFLabel = styled.label`
  font-size: 14px;
  color: var(--color-text1);
  margin-top: 10px;
`;
const StyledRFBtn = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const StyledRFFooter = styled.div`
  margin-left: 10px;
  display: flex;
`;
const StyledLink = styled(Link)`
  color: #4689e8;
  text-decoration: none;
  padding-left: 6px;
`;
export const RegisterForm = () => {
    const [registerUser, {isLoading, isError, error}] =
        useRegisterUserMutation();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const dispatch = useDispatch();

    const [validationErrors, setValidationErrors] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
        firstName: '',
        lastName: '',
    });
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const formData = Object.fromEntries(form.entries());
        console.log('Form data before validation:', formData);
        try {
            setValidationErrors({
                username: '',
                password: '',
                passwordConfirm: '',
                firstName: '',
                lastName: '',
            });
            const validatedData = RegScheme.parse(formData); // Валидация входных данных с помощью RegScheme
            const response = await registerUser(validatedData).unwrap();
            const validatedResponse =
                RegistrationResponseSchema.parse(response); // Валидация ответа сервера с помощью RegistrationResponseSchema
            console.log('Validated response:', validatedResponse);
            dispatch(setAuthenticated(true));
            sessionStorage.setItem('isAuth', 'true');
            console.log('Регистрация прошла успешно');
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errors = error.issues.reduce(
                    (acc, issue) => {
                        acc[issue.path[0] as keyof typeof validationErrors] =
                            issue.message;
                        return acc;
                    },
                    {} as typeof validationErrors
                );
                setValidationErrors(errors);
                console.log('Validation errors:', errors);
            } else {
                console.error('Registration failed:', error);
            }
        }
    };

    return (
        <StyledRFContainer>
            <form onSubmit={handleSubmit}>
                <StyledRFInputBox>
                    <StyledRFLabel htmlFor="email">Email</StyledRFLabel>
                    <Input
                        name="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {validationErrors.username && (
                        <StyledRFError>
                            {validationErrors.username}
                        </StyledRFError>
                    )}
                    <StyledRFLabel htmlFor="password">Пароль</StyledRFLabel>
                    <Input
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {validationErrors.password && (
                        <StyledRFError>
                            {validationErrors.password}
                        </StyledRFError>
                    )}
                    <StyledRFLabel htmlFor="passwordConfirm">
                        Повторите пароль
                    </StyledRFLabel>
                    <Input
                        name="passwordConfirm"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                    {validationErrors.passwordConfirm && (
                        <StyledRFError>
                            {validationErrors.passwordConfirm}
                        </StyledRFError>
                    )}

                    <StyledRFLabel htmlFor="">Ваше имя</StyledRFLabel>
                    <Input
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {validationErrors.firstName && (
                        <StyledRFError>
                            {validationErrors.firstName}
                        </StyledRFError>
                    )}

                    <StyledRFLabel htmlFor="">Ваша фамилия</StyledRFLabel>
                    <Input
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {validationErrors.lastName && (
                        <StyledRFError>
                            {validationErrors.lastName}
                        </StyledRFError>
                    )}
                </StyledRFInputBox>
                <StyledRFBtn>
                    <Button
                        $variant="primary"
                        $btnWidth="m"
                        $btnSquareSize="button--square--size-m"
                        type="submit"
                    >
                        Зарегистрироваться
                    </Button>
                </StyledRFBtn>
            </form>
            <StyledRFFooter>
                <div>Уже есть аккаунт?</div>
                <StyledLink href={RouteEnum.LOGIN}>Вход</StyledLink>
            </StyledRFFooter>
        </StyledRFContainer>
    );
};
