import { CreateFoodInfo } from '@/f_entities/food/type';

export const createFoodData = (
    createFoodInfo: CreateFoodInfo,
    isPublic: boolean
) => {
    return {
        name: String(createFoodInfo.name),
        is_public: isPublic,
        products: [
            {
                product_id: Number(createFoodInfo.product_id),
                weight: Number(createFoodInfo.weight),
            },
        ],
        info: {
            protein: createFoodInfo.protein
                ? Number(createFoodInfo.protein)
                : undefined,
            fat: createFoodInfo.fat ? Number(createFoodInfo.fat) : undefined,
            carbs: createFoodInfo.carbs
                ? Number(createFoodInfo.carbs)
                : undefined,
            calories: createFoodInfo.calories
                ? Number(createFoodInfo.calories)
                : undefined,
        },
    };
};
