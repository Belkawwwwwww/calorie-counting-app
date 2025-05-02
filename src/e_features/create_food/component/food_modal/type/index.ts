import { FoodOrProduct } from "@/g_shared/lib/type/SearchType";

export type Props = {
    isOpen: boolean;
    onClose: () => void;
    item: FoodOrProduct | null;
    handleCloseAdditionalModal: (item: FoodOrProduct, weight: number) => void;
}