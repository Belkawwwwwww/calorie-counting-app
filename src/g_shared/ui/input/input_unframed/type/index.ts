import { ChangeEventHandler } from 'react';

export type Props = {
    onChange: ChangeEventHandler<HTMLInputElement>;
    value?: string | number | undefined;
    label?: string;
    inputRef?: React.LegacyRef<HTMLInputElement>;
    type?: string;
    placeholder?: string;
    id: string;
};
