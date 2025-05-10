import { FC } from "react";
import { Props } from "../type";
import { LoadingIndicator } from "../../loader";

export const FetchIndicator: FC<Props> = (props) => {
    if (props.isLoading) {
        return <LoadingIndicator />
    }
    return <>{props.children}</>;

}