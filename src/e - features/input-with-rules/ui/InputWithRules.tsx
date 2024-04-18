import {FC, useEffect, useState} from "react";
import {IInputProps} from "@/e - features/input-with-rules/ui/type";
import {Input} from "@/g - shared/ui/Input";
import styled from "styled-components";

const StyledInputText = styled.div`
  font-size: 14px;
  color: red;
`
export const InputWithRules: FC<IInputProps> = ({onChange, rules, text, value, inputRef, ...others}) => {
    const [isRelative, setIsRelative] = useState(true)
    useEffect(() => {
        if (value !== '') {
            const res = value.match(rules)
            setIsRelative(!!res)
        } else {
            setIsRelative(true)
        }
    }, [value]) // eslint-disable-line
    return (
        <>
            <Input value={value} onChange={onChange} inputRef={inputRef} {...others}/>
            {!isRelative && <StyledInputText>{text}</StyledInputText>}
        </>
    )
}