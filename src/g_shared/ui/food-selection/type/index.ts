import { Food, Product } from "@/g_shared/lib/type/SearchType";

export type Props = {
    foodData?: Food[];
    productData?: Product[];
    onItemClick: (item: Food | Product) => void;
}