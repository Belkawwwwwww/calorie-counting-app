import { AddedItem } from "@/g_shared/lib/type/AddedItemType";

export type Props = {
    addedItems: AddedItem[];
    onClose: () => void;
    onDeleteItem: (index: number) => void;
    isOpen: boolean;
};