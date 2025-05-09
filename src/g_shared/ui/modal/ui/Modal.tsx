import React, {
    FC,
    MouseEventHandler,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Portal } from '../../portal/ui/Portal';
import { ExtendedProps, ModalStyle } from '../type';
import { CloseButton, CloseButtonContainer, ModalContent, ModalWrapper, Title } from './style';

export const Modal: FC<ExtendedProps> = (props) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    const modalStyle: ModalStyle = {
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
        overflowY: 'auto',
        maxHeight: '100vh',
    };

    useEffect(() => {
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
                    <CloseButtonContainer>
                        {props.closeButtonContent ? (
                            props.closeButtonContent
                        ) : (
                            <CloseButton type='button' onClick={handleClose}>
                                Х
                            </CloseButton>
                        )}
                        {props.rightContent}
                    </CloseButtonContainer>
                    {props.image ? (
                        <img
                            src={props.image}
                            alt='Модальное окно'
                            className={props.imageClassName}
                        />
                    ) : null}
                    <Title>{props.title}</Title>
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
