import { InputBox } from '@/g_shared/ui/input';
import { CreateContainer } from './style';
import { LoadingInBtn } from '@/g_shared/ui/loader';
import { Button } from '@/g_shared/ui/button';
import { useFoodForm } from '../hooks/useCreateFoodForm';
import { useCreateFood } from '../hooks/useCreateFood';
import { FoodTransition } from '@/g_shared/lib/utils';
import { FC } from 'react';
import { Error } from '@/g_shared/ui/error_display';
import { InfoInput } from '@/g_shared/ui/info_input';
import { ProductInput } from '@/g_shared/ui/product_input';
import { ToggleButton } from '@/g_shared/ui/toggle_button';

type PublicOption = boolean;
const publicOptions: PublicOption[] = [true, false];
type Props = {
    handleCloseAdditionalModal?: () => void;
};
export const CreateFood: FC<Props> = (props) => {
    const { createFood, isLoading } = useCreateFood();
    const { state, handleIsPublicToggle, handleInputChange, handleSubmit } =
        useFoodForm({
            createFood,
            onSuccess: props.handleCloseAdditionalModal,
        });
    const { name, isPublic, products, info, validationErrors } = state;

    return (
        <CreateContainer>
            <InputBox
                type='text'
                value={name}
                onChange={(e) => handleInputChange(e, 'name')}
                useUnframedInput={true}
                placeholder='ВВЕДИТЕ НАЗВАНИЕ'
                label={FoodTransition.name}
                id={name}
                error={validationErrors.name}
            />
            {products.map((product, id) => (
                <ProductInput
                    key={id}
                    product={product}
                    id={id}
                    handleInputChange={handleInputChange}
                    validationErrors={validationErrors}
                />
            ))}
            <InfoInput
                info={info}
                handleInputChange={handleInputChange}
                validationErrors={validationErrors}
            />
            <ToggleButton
                options={publicOptions.map((option) => (option ? 'ДА' : 'НЕТ'))}
                selectedValue={isPublic ? 'ДА' : 'НЕТ'}
                onToggle={(value) => handleIsPublicToggle(value === 'ДА')}
                label={FoodTransition.is_public}
            />

            <Error keyName='createFood' />
            <Button
                $variant='primary'
                $btnWidth='s'
                $btnSquareSize='button--square--size-m'
                type='button'
                onClick={handleSubmit}
            >
                {isLoading ? <LoadingInBtn /> : 'СОЗДАТЬ'}
            </Button>
        </CreateContainer>
    );
};
