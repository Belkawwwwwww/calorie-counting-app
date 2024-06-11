import {TypedUseSelectorHook, useDispatch, useSelector, useStore,} from 'react-redux';
import {AppDispatch, AppStore, RootState,} from '@/app/providers/store-providers/config/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore.withTypes<AppStore>();
