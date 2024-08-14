import React, { useState } from 'react';
import styled from 'styled-components';
import { RouteEnum } from '@/g - shared/model/navigation';
import Link from 'next/link';
import { Button } from '@/g - shared/ui/Button';
import {
    AuthResponseScheme,
    AuthScheme,
} from '@/f - entities/auth/model/authScheme';
import { z } from 'zod';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/g - shared/lib/store';
import { setAuth } from '@/f - entities/redux/session/modele/action/action';
import { setUser } from '@/f - entities/redux/user/model/action/action';
import { OpenRoute } from '@/c - pages/router-providers';
import { LoadingIndicator } from '@/g - shared/ui/Loader/LoadingIndicator';
import { useAuthUserMutation } from '@/g - shared/api/authApi';
import { InputBox } from '@/g - shared/ui/Input/InputBox/InputBox';
import { useZodInputValidation } from '@/g - shared/hooks/useZodInputValidation';

const StyledLFContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 450px;
`;
const StyledLFError = styled.div`
    color: red;
`;
const StyledLFBtn = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;
const StyledPasswordRecovery = styled.div`
    margin-left: 20px;
    color: #4689e8;
    cursor: pointer;
`;
const StyledLFFooter = styled.div`
    display: flex;
`;
const StyledLink = styled(Link)`
    color: #4689e8;
    text-decoration: none;
    padding-left: 6px;
`;

export const LoginForm = () => {
    const [authUser, { isLoading }] = useAuthUserMutation();
    const { inputValue: email, handleInputChange: handleEmailChange } =
        useZodInputValidation(AuthScheme.shape.username);
    const { inputValue: password, handleInputChange: handlePasswordChange } =
        useZodInputValidation(AuthScheme.shape.password);

    const [validationErrors, setValidationErrors] = useState({
        username: '',
        password: '',
    });
    const [authError, setAuthError] = useState('');
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const formData = Object.fromEntries(form.entries());
        console.log('Данные формы перед валидацией:', formData);
        try {
            setValidationErrors({
                username: '',
                password: '',
            });
            setAuthError('');
            const validatedData = AuthScheme.parse(formData);
            if (authUser) {
                const response = await authUser(validatedData).unwrap();
                if (response?.response_status === 0) {
                    const validatedResponse =
                        AuthResponseScheme.parse(response);
                    const backendUser_id = response?.data?.id;
                    if (validatedResponse) {
                        dispatch(setAuth(true));
                        dispatch(setUser({ user_id: backendUser_id }));
                        console.log(authUser);
                        await router.push(RouteEnum.MAIN);
                        console.log('Авторизация успешна');
                    }
                } else {
                    setAuthError('Неправильный логин или пароль');
                    console.log(response);
                }
            } else {
                console.error(
                    'Ошибка регистрации: authUser is null or undefined'
                );
                setAuthError('Произошла ошибка при авторизации');
            }
        } catch (error: unknown | z.ZodError) {
            if (error instanceof z.ZodError) {
                const errors = error.issues.reduce(
                    (acc: typeof validationErrors, issue: z.ZodIssue) => {
                        acc[issue.path[0] as keyof typeof validationErrors] =
                            issue.message;
                        return acc;
                    },
                    {} as typeof validationErrors
                );
                setValidationErrors(errors);
                console.log('Ошибки валидации:', errors);
            } else {
                console.error('Ошибка регистрации:', error);
                setAuthError('Произошла ошибка при авторизации');
            }
        }
    };
    return (
        <OpenRoute>
            <StyledLFContainer>
                <form onSubmit={handleSubmit}>
                    {authError ? (
                        <StyledLFError>{authError}</StyledLFError>
                    ) : null}
                    <InputBox
                        label='Email'
                        error={validationErrors.username}
                        id='username'
                        type='username'
                        name='username'
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <InputBox
                        label='Пароль'
                        error={validationErrors.password}
                        id='password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <StyledLFBtn>
                        <Button
                            $variant='primary'
                            $btnWidth='s'
                            $btnSquareSize='button--square--size-m'
                            type='submit'
                        >
                            {isLoading ? <LoadingIndicator /> : 'Войти'}
                        </Button>
                        <StyledPasswordRecovery>
                            Восстановление пароля
                        </StyledPasswordRecovery>
                    </StyledLFBtn>
                </form>

                <StyledLFFooter>
                    <div>Еще не зарегистрированы?</div>
                    <StyledLink href={RouteEnum.REGISTRATION}>
                        Регистрация
                    </StyledLink>
                </StyledLFFooter>
            </StyledLFContainer>
        </OpenRoute>
    );
};
