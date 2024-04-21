import {FC, memo} from "react";
import {IInputProps} from "@/g - shared/ui/Input/types";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid #eaeff2;
  border-radius: 4px;
  padding: 14px 20px;
  outline: none;
  background: transparent;
  font-size: 17px;
  margin-top: 6px;
  margin-bottom: 8px;
`
export const Input: FC<IInputProps> = memo(({onChange, ...otherProps}) => {
    return (
        <StyledInput {...otherProps} onChange={onChange}/>
    )
})
Input.displayName = 'Input'