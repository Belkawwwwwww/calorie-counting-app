import { createAction } from '@reduxjs/toolkit';

export const setPending = createAction<boolean>('pending/setPending');
