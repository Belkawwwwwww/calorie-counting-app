export type Props = {
    onClick?: () => void;
    canAdd?: boolean;
    isLoading?: boolean;
    addBlock?: () => void;
    text?: string
    $btnWidth?: 'm' | 'l';
    centered?: boolean;
};