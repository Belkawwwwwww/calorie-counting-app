import { FoodOrProduct } from "@/g_shared/lib/type/SearchType";

export type Product = {
    product_id: number;
    weight: number;
};
export type AddedItemsCreateFood = {
    product_id: number;
    weight: number;
    item: FoodOrProduct
}

export type Info = {
    protein?: number;
    fat?: number;
    carbs?: number;
    calories?: number;
};

export type FoodDataParams = {
    name: string;
    isPublic: boolean;
    products: Product[];
    info: Info;
};

export type FoodData = {
    name: string;
    is_public: boolean;
    products: {
        product_id: number;
        weight: number;
    }[];
    info: Info
};
export type CreateFoodInput = FoodData;
