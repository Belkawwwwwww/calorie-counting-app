import { FC } from 'react';
import { Props } from '../type';
import { Criteria, Profile } from './style';

export const ProfileInfo: FC<Props> = (props) => {
    return (
        <Profile>
            <Criteria>ПОЛ: {props.gender}</Criteria>
            <Criteria>ЦЕЛЬ: {props.target}</Criteria>
            {/* <Criteria>ВОЗРАСТ: {age}</Criteria> */}
            <Criteria>РОСТ: {props.growth}</Criteria>
            <Criteria>ОБРАЗ ЖИЗНИ: {props.activity}</Criteria>
            <Criteria>ВЕС: {props.weight}</Criteria>
        </Profile>
    );
};
