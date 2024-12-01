import { Provider } from 'react-redux';
import { store } from '@/app/providers/store-providers/config/store';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

export const StoreProvider = (props: Props) => {
    return <Provider store={store}>{props.children}</Provider>;
};
