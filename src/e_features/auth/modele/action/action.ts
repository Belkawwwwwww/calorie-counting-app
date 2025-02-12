import { createAction } from '@reduxjs/toolkit';

export const setAuth = createAction<boolean>('session/setAuth');
