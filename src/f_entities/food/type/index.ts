export type Product = {
    product_id: number | null;
    weight: number | null;
};

export type FoodInfo = {
    protein: number | null;
    fat: number | null;
    carbs: number | null;
    calories: number | null;
};
export type CreateFoodInfo = {
    name: string;
    products: Product[];
    info: FoodInfo;
};
