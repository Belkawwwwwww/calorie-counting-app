import { FC } from 'react';
import { Props } from '../type';
import { FoodTransition } from '@/g_shared/lib/utils/translation';
import { PublicContainer, ToggleButtons } from './style';

export const ToggleButton: FC<Props> = (props) => {
    return (
        <PublicContainer>
            <>{FoodTransition.is_public}:</>
            <div>
                <ToggleButtons
                    isActive={props.isPublic}
                    onClick={() => props.onToggle(true)}
                >
                    ДА
                </ToggleButtons>
                <ToggleButtons
                    isActive={!props.isPublic}
                    onClick={() => props.onToggle(false)}
                >
                    НЕТ
                </ToggleButtons>
            </div>
        </PublicContainer>
    );
};
