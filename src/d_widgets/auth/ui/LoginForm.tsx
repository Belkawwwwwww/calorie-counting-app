import { useLoginForm } from '@/e_features/auth/lib/hooks';
import { OpenRoute } from '@/e_features/auth/components';
import { Button } from '@/g_shared/ui/button';
import { Error } from '@/g_shared/ui/error_display';
import { InputBox } from '@/g_shared/ui/input';
import { LoadingInBtn } from '@/g_shared/ui/loader';
import {
    Btn,
    Container,
    Footer,
    PasswordRecovery,
    StyledLink,
    Text,
} from './style';

export const LoginForm = () => {
    const {
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        validationErrors,
        handleSubmit,
        handleNavigation,
        isLoading,
    } = useLoginForm();

    const formFields = [
        {
            label: 'Email',
            error: validationErrors.username,
            id: 'username',
            type: 'username',
            name: 'username',
            value: email || '',
            onChange: handleEmailChange,
        },
        {
            label: 'Password',
            error: validationErrors.password,
            type: 'password',
            id: 'password',
            name: 'password',
            value: password || '',
            onChange: handlePasswordChange,
        },
    ];

    return (
        <OpenRoute>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Error keyName='auth' />
                    {formFields.map(
                        ({ label, error, id, type, name, value, onChange }) => (
                            <InputBox
                                key={id}
                                label={label}
                                error={error}
                                id={id}
                                type={type}
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                        )
                    )}
                    <Btn>
                        <Button
                            $variant='primary'
                            $btnWidth='s'
                            $btnSquareSize='button--square--size-m'
                            type='submit'
                            disabled={isLoading}
                        >
                            {isLoading ? <LoadingInBtn /> : 'Войти'}
                        </Button>
                        <PasswordRecovery>
                            Восстановление пароля
                        </PasswordRecovery>
                    </Btn>
                </form>

                <Footer>
                    <Text>Еще не зарегистрированы?</Text>
                    <StyledLink onClick={handleNavigation}>
                        Регистрация
                    </StyledLink>
                </Footer>
            </Container>
        </OpenRoute>
    );
};
