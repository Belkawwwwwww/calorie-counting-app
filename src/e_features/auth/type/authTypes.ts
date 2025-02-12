import {
    AuthResponseScheme,
    AuthScheme,
    LogoutResponseScheme,
    RegScheme,
} from '@/g_shared/lib/validation/authScheme';

export type RegistrationInput = typeof RegScheme._input;

export type AuthResponse = typeof AuthResponseScheme._output;
export type AuthInput = typeof AuthScheme._input;
export type LogoutResponse = typeof LogoutResponseScheme._output;
