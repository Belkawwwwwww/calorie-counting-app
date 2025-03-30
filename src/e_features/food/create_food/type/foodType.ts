export type Product = {
    product_id: string;
    weight: string;
};

export type Info = {
    protein: string;
    fat: string;
    carbs: string;
    calories: string;
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
    products: { product_id: number; weight: number }[];
    info: {
        protein?: number;
        fat?: number;
        carbs?: number;
        calories?: number;
    };
};
