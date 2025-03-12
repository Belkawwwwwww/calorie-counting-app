export type MealType = 'breakfast' | 'lunch' | 'dinner';
export const mealTypes: MealType[] = ['breakfast', 'lunch', 'dinner'];
// Тип для информации о макроэлементах
export type MealInfo = {
    protein: number;
    fat: number;
    carbs: number;
    calories: number;
};
// Тип для каждого продукта в meal_foods
export type MealFood = {
    type: 'product' | 'food';
    id: number;
    weight: number;
    name: string;
    info: MealInfo;
};

// Тип для информации о приеме пищи
export type Meal = {
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    day: string;
    user_id: number;
    meal_foods: MealFood[];
    meal_type: MealType;
    weight: number;
    info: MealInfo;
};

// Тип для данных о приеме пищи
export type DataMeal = {
    response_status: number;
    data: Meal[];
    error: string | null;
};
export type FoodItem = {
    type: 'product' | 'food';
    id: number;
    weight: number;
};

export type NutritionData = {
    day: string;
    food: FoodItem[];
    meal_type: MealType;
};
