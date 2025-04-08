// import { useSearchFood } from '@/e_features/food/search_food/hooks/useSearchFood';
// import { Food, Product } from '@/g_shared/lib/type/SearchType';
// import { useScrollToLastBlock } from '@/g_shared/lib/hooks';
// import { MealType } from '@/g_shared/lib/type/nutritionTypes';
// import { Error } from '@/g_shared/ui/error_display';
// import { InputBox } from '@/g_shared/ui/input';
// import { LoadingIndicator } from '@/g_shared/ui/loader';
// import { FC, useEffect, useState } from 'react';
// import { useFoodBlocks } from '../../../e_features/meal/create_or_update_meal/hooks/useFoodBlocks';
// import { useMealSubmission } from '../../../e_features/meal/create_or_update_meal/hooks/useMealSubmission';
// import { Box, CategoryName, Foods, Plus, ProductContainer, ProductList, ProductName, Remove } from './style';
// import { mealTypeOptions } from '@/g_shared/lib/utils';
// import { Modal } from '@/g_shared/ui/modal';
// import { FoodBlocks } from '@/g_shared/ui/create_meal_bocks';
// import { LinkButton } from '@/g_shared/ui/linkButton';
// import { AddButton } from '@/g_shared/ui/add_meal_button';
// import { useSearch } from '@/e_features/food/search_food/ui/useSearch';

// type Props = {
//     data: string;
//     title: MealType;
//     handleCloseAdditionalModal?: () => void;
// };

// export const CreateOrUpdateMeal: FC<Props> = (props) => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const { data, isLoading: searchLoading, error } = useSearchFood(searchTerm.length > 0 ? searchTerm : '');




//     const foodData = data?.data?.food || [];
//     const productData = data?.data?.product || [];
//     console.log({ data })
//     const [isModalActive, setModalActive] = useState(false);


//     const {
//         foodBlocks,
//         handleAddFoodBlock,
//         handleRemoveFoodBlock,
//         updateFoodBlock,
//     } = useFoodBlocks();
//     const { handleSubmit, isLoading, validationErrors } = useMealSubmission({
//         data: props.data,
//         title: props.title,
//         foodBlocks,
//         onSuccess: props.handleCloseAdditionalModal,
//     });

//     const lastFoodBlockRef = useScrollToLastBlock(foodBlocks.length);

//     const allInputsFilled = foodBlocks.every(
//         (block) => block.id !== '' && block.weight !== ''
//     );

//     const handleAddMoreClick = (food: any) => {
//         setModalActive(true);
//     };

//     const handleCloseModal = () => {
//         setModalActive(false);
//     };
//     if (searchLoading) {
//         return <LoadingIndicator />
//     }


//     return (
//         <>
//             <div>
//                 <InputBox
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     imageSrc='/barcode.png'
//                     type='text'
//                 />

//                 {foodData ? (
//                     <ProductContainer>
//                         {foodData.map((food: any) => (
//                             <ProductList key={food.id} onClick={() => handleAddMoreClick(food)}>

//                                 <Box>
//                                     <ProductName>{food.name.toUpperCase()}</ProductName>
//                                     <Plus />
//                                 </Box>
//                                 <Box>
//                                     <div>Блюдо</div>
//                                     <CategoryName>{food.calories} ККАЛ</CategoryName>

//                                 </Box>
//                             </ProductList>
//                         ))}

//                     </ProductContainer>
//                 ): null}

//                 {productData ? (
//                     <ProductContainer>
//                         {productData?.map((product: Product) => (
//                             <ProductList key={product.id} onClick={() => handleAddMoreClick(product)}>
//                                 <Box>
//                                     <ProductName>{product.name.toUpperCase()}</ProductName>
//                                     <Plus />

//                                 </Box>
//                                 <CategoryName>{product.category.name.toUpperCase()}, 100 г</CategoryName>
//                                 <Box>
//                                     <div>Продукт</div>
//                                     <CategoryName>{product.calories} ККАЛ</CategoryName>

//                                 </Box>
//                             </ProductList>

//                         ))}
//                     </ProductContainer>
//                 ): null}

//             </div>
//             {isModalActive ? (
//                 <Modal title='хз' onClose={handleCloseModal} width='600px' height='auto'>
//                     {foodBlocks.map((foodBlock, index) => (
//                         <Foods
//                             key={index}
//                             ref={
//                                 index === foodBlocks.length - 1
//                                     ? lastFoodBlockRef
//                                     : null
//                             }
//                         >
//                             <FoodBlocks
//                                 key={index}
//                                 foodBlock={foodBlock}
//                                 index={index}
//                                 updateFoodBlock={updateFoodBlock}
//                                 handleRemoveFoodBlock={handleRemoveFoodBlock}
//                                 validationErrors={validationErrors[index]}
//                                 mealTypeOptions={mealTypeOptions}
//                             />
//                             {foodBlocks.length > 1 ? (
//                                 <Remove>
//                                     <LinkButton
//                                         onClick={() => handleRemoveFoodBlock(index)}
//                                     >
//                                         Отменить
//                                     </LinkButton>
//                                 </Remove>
//                             ) : null}
//                         </Foods>
//                     ))}
//                     <Error keyName='createOrUpdateMeal' absolute={false} />
//                     <AddButton
//                         onClick={handleSubmit}
//                         canAdd={allInputsFilled}
//                         isLoading={isLoading}
//                         addBlock={handleAddFoodBlock}
//                     />
//                 </Modal>
//             ) : null}
//         </>
//     );
// };
