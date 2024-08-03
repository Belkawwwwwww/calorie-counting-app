// import React, {FC, useEffect, useState} from "react";
// import styled from "styled-components";
// import {Input} from "@/g - shared/ui/Input";
// import {IInputProps} from "@/e - features/input-with-rules/ui/type";
//
// const StyledInputText = styled.div`
//   font-size: 14px;
//   color: red;
// `;
//
// export const InputWithRules: FC<IInputProps> = ({
//                                                     onChange,
//                                                     rules,
//                                                     text,
//                                                     value,
//                                                     inputRef,
//                                                     ...others
//                                                 }) => {
//     const [isRelative, setIsRelative] = useState(true);
//
//     useEffect(() => {
//         if (value !== "") {
//             if (rules instanceof RegExp) {
//                 setIsRelative(rules.test(value));
//             } else if (typeof rules === "function") {
//                 setIsRelative(rules(value));
//             } else {
//                 setIsRelative(true);
//             }
//         } else {
//             setIsRelative(true);
//         }
//     }, [value, rules]);
//
//     return (
//         <>
//             <Input value={value} onChange={onChange} inputRef={inputRef} {...others} />
//             {!isRelative ? (<StyledInputText>{text}</StyledInputText>): null}
//         </>
//     );
// };
