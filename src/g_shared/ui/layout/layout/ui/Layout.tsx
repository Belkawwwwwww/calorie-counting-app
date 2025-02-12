import { FC } from 'react';
import { Props } from '../type';
import { Container } from './style';

export const Layout: FC<Props> = (props) => {
    return <Container>{props.children}</Container>;
};
