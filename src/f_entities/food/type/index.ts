export type ValidationErrors = {
    name?: string;
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
    info: {
        protein: string;
        fat: string;
        carbs: string;
        calories: string
    };
    validationErrors: ValidationErrors;
}
