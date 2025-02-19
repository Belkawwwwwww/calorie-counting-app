import React, { ChangeEventHandler } from 'react';

export type Props = {
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: string | undefined;
    inputRef?: React.LegacyRef<HTMLInputElement>;
    type?: string;
    name?: string;
    id?: string;
    placeholder?: string;
    style?: React.CSSProperties;
};
