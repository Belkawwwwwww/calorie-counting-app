import { FC, memo } from "react";
import { SearchContent } from "../components/search_content";
import { StyledSearchBox } from "./style";
import { Props } from "./type";

export const SearchBox: FC<Props> = memo((props) => {
  return (
    <StyledSearchBox>
      <SearchContent onItemClick={props.onItemClick} />
    </StyledSearchBox>
  );
});