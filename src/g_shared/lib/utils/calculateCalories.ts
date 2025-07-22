export const calculateCalories = (cal100g: number, weightInGrams: number): number => {
    const caloriesPerGram = cal100g / 100;
    const totalCalories = caloriesPerGram * weightInGrams
    return Math.ceil(totalCalories)
}