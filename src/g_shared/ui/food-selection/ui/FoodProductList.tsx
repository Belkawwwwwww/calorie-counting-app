import { FC } from "react";
import { ProductContainer, ProductList, Box, ProductName, Plus, CategoryName } from "./style";
import { Food, Product } from "@/g_shared/lib/type/SearchType";

export type Props = {
    foodData?: Food[];
    productData?: Product[];
    onItemClick: (item: Food | Product) => void;
}
export const FoodProductList: FC<Props> = (props) => {
    return (
        <>
            {props.foodData ? (
                <ProductContainer>
                    {props.foodData.map((food) => (
                        <ProductList key={food.id} onClick={() => props.onItemClick(food)}>

                            <Box>
                                <ProductName>{food.name.toUpperCase()}</ProductName>
                                <Plus />
                            </Box>
                            <Box>
                                <CategoryName>Блюдо</CategoryName>
                                <CategoryName>{Math.ceil(food.calories)} ккал</CategoryName>

                            </Box>
                        </ProductList>
                    ))}

                </ProductContainer>
            ) : null}

            {props.productData ? (
                <ProductContainer>
                    {props.productData?.map((product) => (
                        <ProductList key={product.id} onClick={() => props.onItemClick(product)}>
                            <Box>
                                <ProductName>{product.name.toUpperCase()}</ProductName>
                                <Plus />

                            </Box>
                            <CategoryName>{product.category.name.toUpperCase()}, 100 г</CategoryName>
                            <Box>
                                <CategoryName>Продукт</CategoryName>
                                <CategoryName>{product.calories} ккал</CategoryName>

                            </Box>
                        </ProductList>

                    ))}
                </ProductContainer>
            ) : null}
        </>

    )
}