import React, { ChangeEventHandler } from 'react';

export interface IInputProps {
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: string;
    inputRef?: React.LegacyRef<HTMLInputElement>;
    type?: string;
    name?: string;
    id?: string;
}
