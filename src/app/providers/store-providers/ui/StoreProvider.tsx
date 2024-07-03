import {Provider} from 'react-redux';
import {store} from '@/app/providers/store-providers/config/store';
import {ReactNode} from 'react';

interface StoreProviderProps {
    children: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
    return (
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            {props.children}
            {/* </PersistGate> */}
        </Provider>
    );
};
