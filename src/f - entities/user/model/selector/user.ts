import {RootState} from "@/app/providers/store-providers/config/store";
import {createSelector} from "@reduxjs/toolkit";

const _user = (state: RootState) => state.user.users

export const userDataSelector = createSelector([_user], (state)=> state)