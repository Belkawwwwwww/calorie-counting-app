import { FC, memo } from 'react';
import { Props } from '../type/type';
import { PublicContainer, ToggleButtons } from './style';

export const ToggleButton: FC<Props> = memo((props) => {
    const { options, selectedValue, onToggle, label } = props;

    return (
        <PublicContainer>
            <>{label}:</>
            <div>
                {options.map((option) => (
                    <ToggleButtons
                        key={option}
                        isActive={selectedValue === option}
                        onClick={() => onToggle(option)}
                    >
                        {option}
                    </ToggleButtons>
                ))}
            </div>
        </PublicContainer>
    );
});
