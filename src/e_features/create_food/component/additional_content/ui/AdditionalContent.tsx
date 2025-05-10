import { InfoInput } from "@/g_shared/ui/info_input";
import { FC } from "react";
import { Props } from "../type";
import { AddBox, Plus } from "./style";
import { SearchContent } from "@/e_features/search_food/components/search_content";


export const AdditionalContent: FC<Props> = (props) => {
    const defaultInfo = { protein: '', fat: '', carbs: '', calories: '' };
    const handleOpenSearch = () => {
        props.setModalState({ search: true, info: false })
    }
    const handleOpenInfo = () => {
        props.setModalState({ search: false, info: true })
    }
    return (
        <>
            {props.modalState.search ? (
                <SearchContent onItemClick={props.handleAddMoreClick} />
            ) : (
                <AddBox onClick={handleOpenSearch}>
                    <Plus />
                    <>{props.searchLabel}</>
                </AddBox>

            )}
            {props.showInfoInput ? (
                props.modalState.info ? (
                    <InfoInput
                        info={props.info || defaultInfo}
                        handleInputChange={props.handleInputChange}
                        validationErrors={props.validationErrors}
                    />
                ) : (
                    <AddBox onClick={handleOpenInfo}>
                        <Plus />
                        <>Добавить информацию о блюде</>
                    </AddBox>
                )
            ) : null}
        </>
    )
}