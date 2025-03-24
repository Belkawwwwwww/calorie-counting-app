interface Product {
    product_id: string;
    weight: string;
}

interface Info {
    protein: string;
    fat: string;
    carbs: string;
    calories: string;
}

interface FoodDataParams {
    name: string;
    isPublic: boolean;
    products: Product[];
    info: Info;
}

interface FoodData {
    name: string;
    is_public: boolean;
    products: { product_id: number; weight: number }[];
    info: {
        protein?: number;
        fat?: number;
        carbs?: number;
        calories?: number;
    };
}

export const formatFoodData = (params: FoodDataParams): FoodData => {
    const { name, isPublic, products, info } = params;

    return {
        name,
        is_public: isPublic,
        products: products.map(({ product_id, weight }) => ({
            product_id: Number(product_id),
            weight: Number(weight),
        })),
        info: {
            protein: info.protein ? Number(info.protein) : undefined,
            fat: info.fat ? Number(info.fat) : undefined,
            carbs: info.carbs ? Number(info.carbs) : undefined,
            calories: info.calories ? Number(info.calories) : undefined,
        },
    };
};
