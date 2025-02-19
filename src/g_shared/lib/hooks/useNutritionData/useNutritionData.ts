import { Meal } from '@/f_entities/meal/type/mealModel';

export const useNutritionData = (dataMeal: Meal | null) => {
    return dataMeal
        ? [
              { value: dataMeal.info.calories, label: 'Калории' },
              { value: Math.ceil(dataMeal.info.carbs), label: 'Углеводы' },
              { value: Math.ceil(dataMeal.info.protein), label: 'Белки' },
              { value: Math.ceil(dataMeal.info.fat), label: 'Жиры' },
          ]
        : [
              { value: 0, label: 'Калории' },
              { value: 0, label: 'Углеводы' },
              { value: 0, label: 'Белки' },
              { value: 0, label: 'Жиры' },
          ];
};
