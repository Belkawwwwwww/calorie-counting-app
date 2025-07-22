import { calculateCalories } from "@/g_shared/lib/utils";

export const getCalories = (item: any): number => {
    const cal100g: number = item.item
        ? item.item.info?.calories ?? item.item.calories
        : undefined;
    return calculateCalories(cal100g, item.weight);
};