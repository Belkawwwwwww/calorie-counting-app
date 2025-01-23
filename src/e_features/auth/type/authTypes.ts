import {
    RegistrationResponseSchema,
    RegScheme,
} from '@/e_features/auth/model/registrationSchema';
import {
    AuthResponseScheme,
    AuthScheme,
} from '@/e_features/auth/model/authScheme';

export type RegistrationResponse = typeof RegistrationResponseSchema._output;
export type RegistrationInput = typeof RegScheme._input;

export type AuthResponse = typeof AuthResponseScheme._output;
export type AuthInput = typeof AuthScheme._input;
