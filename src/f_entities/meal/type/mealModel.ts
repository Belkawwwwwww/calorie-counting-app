export type MealType = 'breakfast' | 'lunch' | 'dinner';
export const mealTypes: MealType[] = ['breakfast', 'lunch', 'dinner'];
export type Meal = {
    meal_type: MealType;
    info: {
        calories: number;
        protein: number;
        fat: number;
        carbs: number;
    };
};
export type MealInfo = {
    protein: number;
    fat: number;
    carbs: number;
    calories: number;
};
export type DataMeal = {
    data: Meal[];
};
