import { Props } from '../../input/type/types';

export type InputBoxProps = {
    label?: string;
    error?: string;
    direction?: 'column' | 'row';
} & Props;
