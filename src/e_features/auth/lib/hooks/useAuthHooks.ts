import {
    useRegisterUserMutation,
    useAuthUserMutation,
    useFetchUserSessionQuery,
    useLogoutUserMutation,
} from '../../api/authApi';

export const useRegister = () => {
    const [register, { isLoading, error }] = useRegisterUserMutation();
    return { register, isLoading, error };
};

export const useAuth = () => {
    const [auth, { isLoading }] = useAuthUserMutation();
    return { auth, isLoading };
};

export const useFetchUser = () => {
    const { data, isLoading, isError, isSuccess, error } =
        useFetchUserSessionQuery();
    return { data, isLoading, isError, isSuccess, error };
};

export const useLogout = () => {
    const [logout] = useLogoutUserMutation();
    return { logout };
};
