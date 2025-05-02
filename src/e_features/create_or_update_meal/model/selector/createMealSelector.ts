import { RootState } from "@/app/providers/store_providers/config/store";
import { AddedItem } from "@/g_shared/lib/type/AddedItemType";

export const selectAddedItems = (state: RootState): AddedItem[] => {
    return state.createOrUpdateMeal.addedItems;
}
