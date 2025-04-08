import { InputBox } from "@/g_shared/ui/input";
import { ChangeEvent, FC, memo } from "react";

export type Props = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const SearchInput: FC<Props> = memo((props) => {
    return (
        <InputBox
            value={props.value}
            onChange={props.onChange}
            imageSrc='/barcode.png'
            type='text'
        />
    );
})
SearchInput.displayName = 'SearchInput'; 
