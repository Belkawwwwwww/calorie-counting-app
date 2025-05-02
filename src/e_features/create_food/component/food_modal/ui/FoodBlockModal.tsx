import { FoodBlocks } from "@/e_features/create_or_update_meal/components/block_food/ui/FoodBlock";
import { Modal } from "@/g_shared/ui/modal";
import { FC } from "react";
import { Props } from "../type";

export const FoodBlockModal: FC<Props> = (props) => {
    if (!props.isOpen) {
        return null;
    }
    return (
        <Modal onClose={props.onClose}>
            <FoodBlocks item={props.item} handleCloseAdditionalModal={props.handleCloseAdditionalModal} />
        </Modal>
    );

}