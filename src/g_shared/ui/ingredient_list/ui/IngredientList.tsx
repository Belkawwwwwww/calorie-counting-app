import { FC } from "react";
import { Props } from "../type";
import { ProductListItem } from "../../product_list_item";

export const IngredientList: FC<Props> = (props) => {
    return (
        <>
            {props.addedItems.map((item, index) => (
                <ProductListItem
                    key={index}
                    name={item.item.name}
                    weight={item.weight}
                    calories={Math.ceil(item.item.calories)}
                    onDelete={() => props.handleDeleteItem(index)}
                />
            ))}
        </>
    )
}