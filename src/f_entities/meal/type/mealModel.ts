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
    info: MealFoodInfo;
    name: string;
};
// Тип для информации о пище
export type MealFoodInfo = {
    protein: number;
    fat: number;
    carbs: number;
    calories: number;
};
// Тип для информации о приеме пищи
export type Meal = {
    id: number;
    meal_foods: MealFood[]; // Массив продуктов
    meal_type: MealType;
    weight: number;
    info: MealFoodInfo; // Используем MealFoodInfo
};

// // Схема для каждого продукта в meal_foods
// export type Meal = {
//     meal_type: MealType;
//     weight: number;
//     info: {
//         calories: number;
//         protein: number;
//         fat: number;
//         carbs: number;
//     };
// };

// Тип для данных о приеме пищи
export type DataMeal = {
    data: Meal[];
};
