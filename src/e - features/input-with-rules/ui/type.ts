import React, {ChangeEventHandler, InputHTMLAttributes} from "react";

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange | 'value"> {
    onChange: ChangeEventHandler<HTMLInputElement>,
    value: string,
    rules?: RegExp | ((value: string) => boolean) | ((value: string) => boolean)[];
    text: string,
    inputRef?: React.LegacyRef<HTMLInputElement>
    type?: string
}