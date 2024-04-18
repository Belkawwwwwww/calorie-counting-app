import React, {ChangeEventHandler, InputHTMLAttributes} from "react";

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange | 'value"> {
    onChange: ChangeEventHandler<HTMLInputElement>,
    value: string,
    rules: RegExp, // правила проверки ввода
    text: string,
    inputRef?: React.LegacyRef<HTMLInputElement>
}