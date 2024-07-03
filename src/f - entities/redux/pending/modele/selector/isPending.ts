import {RootState} from '@/app/providers/store-providers/config/store';
import {createSelector} from '@reduxjs/toolkit';

const _pending = (state: RootState) => state.pending;
export const isPendingSelector = createSelector(
    _pending,
    (state) => state.pending
);
