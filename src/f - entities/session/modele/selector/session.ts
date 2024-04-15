import {RootState} from "@/app/providers/store-providers/config/store";
import {createSelector} from "@reduxjs/toolkit";

const _session = (state: RootState) => state.session.is_authenticated
export const isAuthSelector = createSelector([_session], (state) => state)