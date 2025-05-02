import { Button } from "@/g_shared/ui/button";
import { LoadingInBtn } from "@/g_shared/ui/loader";
import { FC } from "react";
import { Props } from "..";

export const SaveButton: FC<Props> = (props) => {
    return (
        <Button
            $variant='primary'
            $btnWidth='s'
            $btnSquareSize='button--square--size-m'
            type='button'
            onClick={props.onClick}
        >
            {props.isLoading ? <LoadingInBtn /> : 'СОХРАНИТЬ'}
        </Button>
    )
}