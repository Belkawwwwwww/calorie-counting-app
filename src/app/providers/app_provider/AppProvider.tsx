import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import { StoreProvider } from '../store_providers/ui/StoreProvider';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                {children}
            </StyleSheetManager>
        </StoreProvider>
    );
};
