import {RootState} from "@/app/providers/store-providers/config/store";
import {createSelector} from "@reduxjs/toolkit";

const _user = (state: RootState) => state.user.users
const _error = (state: RootState) => state.user.error;

export const userDataSelector = createSelector([_user], (state)=> state)
export const errorUserSelector = createSelector([_error], (state) => state);