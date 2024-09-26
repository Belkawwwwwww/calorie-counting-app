import { RootState } from '@/app/providers/store-providers/config/store';
import { createSelector } from '@reduxjs/toolkit';

const _user = (state: RootState) => state.user.user_id;
// const _userDetails = (state: RootState) => state.user.userDetails

export const userDataSelector = createSelector([_user], (state) => state);
