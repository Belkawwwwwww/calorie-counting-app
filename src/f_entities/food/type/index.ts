export type ValidationErrors = {
    name?: string;
    products?: Array<{
        product_id?: string;
        weight?: string;
    }>;
    info?: {
        protein?: string;
        fat?: string;
        carbs?: string;
        calories?: string;
    };
};
export type FoodInfo = {
    protein: string;
    fat: string;
    carbs: string;
    calories: string;
};

export interface FoodState {
    name: string;
    isPublic: boolean;
    products: { product_id: string; weight: string }[];
    info: { protein: string; fat: string; carbs: string; calories: string };
    validationErrors: ValidationErrors;
}
