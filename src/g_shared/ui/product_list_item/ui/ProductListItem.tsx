import { FC } from "react";
import { CategoryName, Delete, ProductList, RightBox } from "./style";
import { Props } from "../type";


export const ProductListItem: FC<Props> = (props) => {
    return (
        <ProductList>
            <div>
                <div>{props.name}</div>
                <CategoryName>{props.weight} г</CategoryName>
            </div>
            <RightBox>
                <>{props.calories} ккал</>
                <Delete onClick={props.onDelete}>X</Delete>
            </RightBox>
        </ProductList>
    )
}