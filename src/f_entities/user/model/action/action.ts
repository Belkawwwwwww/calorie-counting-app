import { createAction } from '@reduxjs/toolkit';
import { UserState } from '../type';

export const setUser = createAction<any | null>('user/setUser');
export const setUserDetails = createAction<Partial<UserState>>(
    'user/setUserDetails'
);
