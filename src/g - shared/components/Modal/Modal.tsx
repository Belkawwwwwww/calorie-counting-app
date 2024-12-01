import React, {
    FC,
    MouseEventHandler,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import styled from 'styled-components';
import { Portal } from '../portal/Portal';

// Создаем стилизованный контейнер для модального окна
const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div<{ width?: string; height?: string }>`
    background: white;
    border-radius: 8px;
    padding: 20px;
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
`;

type Props = {
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

export const Modal: FC<Props> = (props) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    const modalStyle = {
        top:
            props.customPosition?.top ||
            (props.position === 'top' ? 0 : undefined),
        bottom:
            props.customPosition?.bottom ||
            (props.position === 'bottom' ? 0 : undefined),
        left:
            props.customPosition?.left ||
            (props.position === 'left' ? 0 : undefined),
        right:
            props.customPosition?.right ||
            (props.position === 'right' ? 0 : undefined),
        width: props.width || undefined,
        height: props.height || undefined,
    };

    useEffect(() => {
        // Здесь можно создать контейнер, если это необходимо
        // createContainer({ id: MODAL_CONTAINER_ID });
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const handleWrapperClick = (e: MouseEvent) => {
            const { target } = e;
            if (target instanceof Node && rootRef.current === target) {
                props.onClose?.();
            }
        };

        const handleEscapePress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                props.onClose?.();
            }
        };

        window.addEventListener('click', handleWrapperClick);
        window.addEventListener('keydown', handleEscapePress);

        return () => {
            window.removeEventListener('click', handleWrapperClick);
            window.removeEventListener('keydown', handleEscapePress);
        };
    }, [props.onClose]);

    const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> =
        useCallback(() => {
            props.onClose?.();
        }, [props.onClose]);

    return isMounted ? (
        <Portal>
            <ModalWrapper ref={rootRef}>
                <ModalContent style={modalStyle}>
                    <CloseButton type='button' onClick={handleClose}>
                        Х
                    </CloseButton>
                    {props.image && (
                        <img
                            src={props.image}
                            alt='Модальное окно'
                            className={props.imageClassName}
                        />
                    )}
                    <p>{props.title}</p>
                    <div>{props.children}</div>
                    <div>
                        {props.footerButtons?.map((button, index) => (
                            <button
                                key={index}
                                disabled={button.disabled}
                                onClick={button.onClick}
                            >
                                {button.name}
                            </button>
                        ))}
                    </div>
                </ModalContent>
            </ModalWrapper>
        </Portal>
    ) : null;
};

export default Modal;
