import {RootState} from "@/app/providers/store-providers/config/store";
import {createSelector} from "@reduxjs/toolkit";

const _session = (state: RootState) => state.session.is_authenticated
const _error = (state: RootState) => state.session.error;
export const isAuthSelector = createSelector([_session], (state) => state)
export const errorSessionSelector = createSelector([_error], (state) => state);