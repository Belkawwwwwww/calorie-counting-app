import { FC } from "react";
import { CategoryName, Delete, Name, ProductList, RightBox } from "./style";
import { Props } from "../type";


export const ProductListItem: FC<Props> = (props) => {
    return (
        <ProductList>
            <div>
                <Name>{props.name}</Name>
                <CategoryName>{props.weight} г</CategoryName>
            </div>
            <RightBox>
                <>{props.calories} ккал</>
                <Delete onClick={props.onDelete}>X</Delete>
            </RightBox>
        </ProductList>
    )
}