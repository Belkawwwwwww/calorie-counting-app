import { AddedItemsCreateFood } from "@/g_shared/lib/type/foodType";

export type Props = {
    addedItems: AddedItemsCreateFood[];
    handleDeleteItem: (index: number) => void;

}