export type Props = {
    title?: string;
    onClose: () => void;
    children?: React.ReactNode | React.ReactNode[];
    footerButtons?: {
        name: string;
        onClick?: () => void;
        disabled?: boolean;
    }[];
    position?: 'top' | 'bottom' | 'left' | 'right' | 'width';
    customPosition?: { [key: string]: string | number };
    width?: string;
    height?: string;
    image?: string | undefined;
    imageClassName?: string;
};
export interface ExtendedProps extends Props {
    closeButtonContent?: React.ReactNode;
    rightContent?: React.ReactNode;
  }
  
export type ModalStyle = {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    width?: string;
    height?: string;
    overflowY?: 'auto';
    maxHeight?: string;
};
