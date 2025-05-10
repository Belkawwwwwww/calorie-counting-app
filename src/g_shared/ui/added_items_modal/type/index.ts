import { AddedItem } from "@/g_shared/lib/type/AddedItemType";

export type Props = {
    addedItems: AddedItem[];
    onDeleteItem: (index: number) => void;
};