import { RootState } from '@/app/providers/store_providers/config/store';
import { createSelector } from '@reduxjs/toolkit';

const _user = (state: RootState) => state.user.user_id;
export const userDataSelector = createSelector([_user], (state) => state);
