import {RootState} from "@/app/store";
import {createSelector} from "@reduxjs/toolkit";

const _session = (state: RootState) => state.session.is_authenticated
export const isSessionSelector = createSelector([_session], (state) => state)