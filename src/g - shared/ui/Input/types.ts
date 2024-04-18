import React, {ChangeEventHandler, InputHTMLAttributes} from "react";

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>,
    inputRef?: React.LegacyRef<HTMLInputElement>
}