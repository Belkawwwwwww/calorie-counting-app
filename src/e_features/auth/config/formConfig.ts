export const loginFormFields = [
    { label: 'Email', id: 'username', type: 'username', name: 'username' },
    { label: 'Пароль', id: 'password', type: 'password', name: 'password' },
];

export const registerFormFields = [
    { label: 'Email', id: 'username', type: 'username', name: 'username' },
    { label: 'Пароль', id: 'password', type: 'password', name: 'password' },
    {
        label: 'Повторите пароль',
        id: 'passwordConfirm',
        type: 'password',
        name: 'passwordConfirm',
    },
    { label: 'Ваше имя', id: 'firstName', type: 'text', name: 'firstName' },
    { label: 'Ваша фамилия', id: 'lastName', type: 'text', name: 'lastName' },
];
