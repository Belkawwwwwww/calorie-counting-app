import { FC } from 'react';
import { Data, Food, Remove } from './style';
import { MealType } from '@/g_shared/lib/type/nutritionTypes';
import { Error } from '@/g_shared/ui/error_display';
import { LinkButton } from '@/g_shared/ui/linkButton';
import { useFoodBlocks } from '../hooks/useFoodBlocks';
import { useMealSubmission } from '../hooks/useMealSubmission';
import { mealTypeOptions } from '@/g_shared/lib/utils';
import { useScrollToLastBlock } from '@/g_shared/lib/hooks';
import { FoodBlocks } from '@/g_shared/ui/create_meal_bocks/ui/FoodBlock';
import { AddButton } from '@/g_shared/ui/add_meal_button';
type Props = {
    data: string;
    title: MealType;
    handleCloseAdditionalModal?: () => void;
};

export const CreateOrUpdateMeal: FC<Props> = (props) => {
    const {
        foodBlocks,
        handleAddFoodBlock,
        handleRemoveFoodBlock,
        updateFoodBlock,
    } = useFoodBlocks();
    const { handleSubmit, isLoading, validationErrors } = useMealSubmission({
        data: props.data,
        title: props.title,
        foodBlocks,
        onSuccess: props.handleCloseAdditionalModal,
    });

    const lastFoodBlockRef = useScrollToLastBlock(foodBlocks.length);

    const allInputsFilled = foodBlocks.every(
        (block) => block.id !== '' && block.weight !== ''
    );

    return (
        <>
            <Data>
                <div>ДАТА</div>
                <div>{props.data}</div>
            </Data>

            {foodBlocks.map((foodBlock, index) => (
                <Food
                    key={index}
                    ref={
                        index === foodBlocks.length - 1
                            ? lastFoodBlockRef
                            : null
                    }
                >
                    <FoodBlocks
                        key={index}
                        foodBlock={foodBlock}
                        index={index}
                        updateFoodBlock={updateFoodBlock}
                        handleRemoveFoodBlock={handleRemoveFoodBlock}
                        validationErrors={validationErrors[index]}
                        mealTypeOptions={mealTypeOptions}
                    />
                    {foodBlocks.length > 1 ? (
                        <Remove>
                            <LinkButton
                                onClick={() => handleRemoveFoodBlock(index)}
                            >
                                Отменить
                            </LinkButton>
                        </Remove>
                    ) : null}
                </Food>
            ))}
            <Error keyName='createOrUpdateMeal' absolute={false} />
            <AddButton
                onClick={handleSubmit}
                canAdd={allInputsFilled}
                isLoading={isLoading}
                addBlock={handleAddFoodBlock}
            />
        </>
    );
};
