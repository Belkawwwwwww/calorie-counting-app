import { FC, useMemo } from "react";
import { Props } from "../type";
import { useMealDataContext } from "@/g_shared/lib/context";
import { Container } from "./style";
import { ProductListItem } from "@/g_shared/ui/product_list_item";
import { getCalories } from "@/e_features/create_or_update_meal/lib";
import { useInitializeAddedItems } from "@/e_features/create_or_update_meal/hooks";

export const AddedItemsModal: FC<Props> = (props) => {
    const { mealData } = useMealDataContext();
    const meal = useMemo(() => {
        return mealData?.data?.find((meal) => meal.meal_type === props.title);
    }, [mealData, props.title]);
    const { addedItems } = useInitializeAddedItems({ mealFoods: meal?.meal_foods })

    return (
        <Container>
            {addedItems.length > 0 ? (
                <>
                    {addedItems.map((item, index) => (
                        <ProductListItem
                            key={index}
                            name={item.item.name}
                            weight={item.weight}
                            calories={getCalories(item)}
                            onDelete={() => props.onDeleteItem(index)}
                        />
                    ))}
                </>
            ) : null}
        </Container>
    )
}
