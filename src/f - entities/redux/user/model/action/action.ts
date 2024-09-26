import { createAction } from '@reduxjs/toolkit';

export const setUser = createAction<any | null>('user/setUser');
export const setUserDetails = createAction<Partial<UserState>>(
    'user/setUserDetails'
);
