import { FoodOrProduct } from "@/g_shared/lib/type/SearchType";

export type Props = {
    onItemClick: (item: FoodOrProduct) => void;
    handleCloseAdditionalModal?: () => void;
}