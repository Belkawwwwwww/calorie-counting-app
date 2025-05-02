import React, { FC } from "react";
import { InputBox } from "../../input";
import { FoodTransition } from "@/g_shared/lib/utils";
import { ValidationErrors } from "@/f_entities/food/type";
export type Props = {
    name: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
    validationErrors: ValidationErrors;
}
export const FoodCreationDescription: FC<Props> = (props) => {
    return (
        <>
            <InputBox
                type='text'
                value={props.name}
                onChange={(e) => props.handleInputChange(e, 'name')}
                useUnframedInput={true}
                placeholder='ВВЕДИТЕ НАЗВАНИЕ'
                label={FoodTransition.name}
                id={props.name}
                error={props.validationErrors.name}
            />
        </>
    )
}