import { CategoryName, Delete, ProductList, RightBox } from "@/g_shared/styles/productListStyles";
import { FC } from "react";
import { Props } from "../type";
import styled from "styled-components";
export const Container = styled.div`
    margin-top: 15px;
`

export const AddedItemsModal: FC<Props> = (props) => {
    return (
        <Container>
            {props.addedItems.length > 0 ? (
                <>
                    {props.addedItems.map((item, index) => (
                        <ProductList key={index}>
                            <div>
                                <div key={index}>{item.item.name}</div>
                                <CategoryName>{item.weight} г</CategoryName>
                            </div>
                            <RightBox>
                                <>{Math.ceil(item.item.calories)} ккал</>
                                <Delete onClick={() => props.onDeleteItem(index)}>Х</Delete>
                            </RightBox>
                        </ProductList>
                    ))}
                </>
            ) : null}
        </Container>
    )
}
