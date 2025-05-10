import { FoodData, FoodDataParams } from '../../../g_shared/lib/type/foodType';

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
