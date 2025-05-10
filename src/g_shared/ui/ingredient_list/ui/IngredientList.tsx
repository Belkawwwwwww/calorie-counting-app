import { CategoryName, Delete, ProductList, RightBox } from "@/g_shared/styles/productListStyles";
import { FC } from "react";
import { Props } from "../type";

export const IngredientList: FC<Props> = (props) => {
    return (
        <>
            {props.addedItems.map((item, index) => (
                <ProductList key={index}>
                    <div>
                        <div key={index}>{item.item.name}</div>
                        <CategoryName>{item.weight} г</CategoryName>
                    </div>
                    <RightBox>
                        <>{Math.ceil(item.item.calories)} ккал</>
                        <Delete onClick={() => props.handleDeleteItem(index)}>Х</Delete>
                    </RightBox>
                </ProductList>
            ))}
        </>
    )
}