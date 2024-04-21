import React, {ChangeEventHandler} from "react";

export interface IInputProps {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>,
    inputRef?: React.LegacyRef<HTMLInputElement>
}