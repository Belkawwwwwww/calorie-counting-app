import { CategoryName, Delete, ProductList, RightBox, Void } from "@/g_shared/styles/productListStyles";
import { Modal } from "@/g_shared/ui/modal";
import { FC } from "react";
import { Props } from "../type";


export const AddedItemsModal: FC<Props> = (props) => {
    if (!props.isOpen) return null;

    return (
        <>
            {props.isOpen ? (
                <Modal title="ДОБАВЛЕНО ТОЛЬКО ЧТО" onClose={props.onClose} width='600px' height='auto'>
                    <>
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
                        ) : (
                            <Void>ПОКА ЧТО ТУТ НИЧЕГО НЕТ </Void>
                        )}

                    </>
                </Modal>
            ) : null}
        </>
    )
}
