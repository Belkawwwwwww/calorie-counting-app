import { useRegisterForm } from '@/e_features/auth/lib/hooks';
import { OpenRoute } from '@/e_features/auth/components';
import { Button } from '@/g_shared/ui/button';
import { Error } from '@/g_shared/ui/error_display';
import { InputBox } from '@/g_shared/ui/input';
import { LoadingInBtn } from '@/g_shared/ui/loader';
import { Btn, Container, FooterRegister, StyledLink } from './style';

export const RegisterForm = () => {
    const {
        formState,
        validationErrors,
        handleInputChange,
        handleSubmit,
        handleNavigation,
        isLoading,
    } = useRegisterForm();

    const formFields = [
        {
            label: 'Email',
            error: validationErrors.username,
            id: 'username',
            type: 'username',
            name: 'username',
            value: formState.username,
            onChange: handleInputChange,
        },
        {
            label: 'Password',
            error: validationErrors.password,
            type: 'password',
            id: 'password',
            name: 'password',
            value: formState.password,
            onChange: handleInputChange,
        },
        {
            label: 'Password repeat',
            error: validationErrors.passwordConfirm,
            id: 'passwordConfirm',
            type: 'password',
            name: 'passwordConfirm',
            value: formState.passwordConfirm,
            onChange: handleInputChange,
        },
        {
            label: 'First name',
            error: validationErrors.firstName,
            id: 'firstName',
            type: 'firstName',
            name: 'firstName',
            value: formState.firstName,
            onChange: handleInputChange,
        },
        {
            label: 'Last name',
            error: validationErrors.lastName,
            id: 'lastName',
            type: 'lastName',
            name: 'lastName',
            value: formState.lastName,
            onChange: handleInputChange,
        },
    ];

    return (
        <OpenRoute>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Error keyName='registration' />
                    {formFields.map((field) => (
                        <InputBox
                            key={field.id}
                            label={field.label}
                            error={field.error}
                            id={field.id}
                            type={field.type}
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                        />
                    ))}

                    <Btn>
                        <Button
                            $variant='primary'
                            $btnWidth='m'
                            $btnSquareSize='button--square--size-m'
                            type='submit'
                        >
                            {isLoading ? (
                                <LoadingInBtn />
                            ) : (
                                'Зарегистрироваться'
                            )}
                        </Button>
                    </Btn>
                </form>
                <FooterRegister>
                    <div>Уже есть аккаунт?</div>
                    <StyledLink onClick={handleNavigation}>Вход</StyledLink>
                </FooterRegister>
            </Container>
        </OpenRoute>
    );
};
