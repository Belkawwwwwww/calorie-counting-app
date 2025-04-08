import { FC } from "react";
import styled from "styled-components";

const StyledSearchInputStub = styled.div`
border: 1px solid #eaeff2;
padding: 14px 20px;
border-radius: 4px;
cursor: pointer;
text-align: center;
color: #888;
margin-top: 13px;
margin-bottom: 8px;
outline: none;

&:hover { 
    background-color: #f9f9f9;
    color: #666;
}
`;
export type Props = {
    onFocus: () => void;
    onMouseOver: () => void;
}

export const SearchInputSub: FC<Props> = (props) => {
    return (
        <StyledSearchInputStub
            onFocus={props.onFocus}
            onMouseOver={props.onMouseOver}
            onClick={props.onFocus}
        >
            НАЖМИТЕ ИЛИ НАВЕДИТЕ ДЛЯ ПОИСКА...
        </StyledSearchInputStub>
    )
}


