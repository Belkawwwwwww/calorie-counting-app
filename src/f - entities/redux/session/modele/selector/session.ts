import { RootState } from '@/app/providers/store-providers/config/store';
import { createSelector } from '@reduxjs/toolkit';

const _session = (state: RootState) => state.session;
export const isAuthSelector = createSelector(
    _session,
    (state) => state.is_authenticated
);
export const isLoadingSelector = createSelector(
    _session,
    (state) => state.isLoading
);
