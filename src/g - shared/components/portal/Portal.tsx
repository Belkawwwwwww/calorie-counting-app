import React, { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
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

type Props = {
    children?: React.ReactNode;
    className?: string;
};

export const Portal: FC<Props> = (props) => {
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