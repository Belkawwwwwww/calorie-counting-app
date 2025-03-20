import { CreateFoodInfo } from '@/f_entities/food/type';

export const createFoodData = (
    createFoodInfo: CreateFoodInfo,
    isPublic: boolean
) => {
    return {
        name: String(createFoodInfo.name || ''),
        is_public: isPublic,
        products: createFoodInfo.products.map((product) => ({
            product_id: Number(product.product_id),
            weight: Number(product.weight),
        })),
        info: {
            protein: createFoodInfo.info.protein
                ? Number(createFoodInfo.info.protein)
                : undefined,
            fat: createFoodInfo.info.fat
                ? Number(createFoodInfo.info.fat)
                : undefined,
            carbs: createFoodInfo.info.carbs
                ? Number(createFoodInfo.info.carbs)
                : undefined,
            calories: createFoodInfo.info.calories
                ? Number(createFoodInfo.info.calories)
                : undefined,
        },
    };
};
