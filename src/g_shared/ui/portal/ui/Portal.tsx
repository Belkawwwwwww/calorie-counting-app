import React, { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Props } from '../type';
import { Container } from './style';

export const Portal: FC<Props> = (props: Props) => {
    const [container] = useState(() => {
        const newContainer = document.createElement('div');
        return newContainer;
    });

    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        };
    }, [container]);

    return ReactDOM.createPortal(
        <Container className={props.className}>{props.children}</Container>,
        container
    );
};
