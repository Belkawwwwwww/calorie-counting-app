export type Food = {
    id: number;
    name: string;
    products?: any,
    protein: number,
    fat: number,
    carbs: number,
    calories: number,
    user_id: number,
    is_public: boolean,
    receipt?: string | null


}
export type CategoryProduct = {
    id: number;
    name: string;
    image: string | null;
    products?: any
}
export type Product = {
    id: number;
    name: string
    category_id: number;
    category: CategoryProduct;
    image: string | null;
    protein: number;
    fat: number;
    carbs: number;
    calories: number;
}
export type FoodOrProduct = Food | Product;
export type SearchResponse = {
    data: {
        data: {
            food: Food[] | null;
            product: Product[] | null;
        };

        error: null | any;
    };
}
