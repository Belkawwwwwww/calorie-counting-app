import { AboutProfile } from '@/d_widgets/about_profile';
import { ProfileInfo } from '@/d_widgets/profile_info';
import { FC } from 'react';
import { Props } from '../type';

export const ProfilePageContent: FC<Props> = (props) => {
    const profileProps = {
        gender: props.gender,
        first_name: props.first_name,
        last_name: props.last_name,
    };

    const profileInfoProps = {
        gender: props.gender,
        target: props.target,
        growth: props.growth,
        activity: props.activity,
        weight: props.weight,
    };
    return (
        <>
            <AboutProfile {...profileProps} />
            <ProfileInfo {...profileInfoProps} />
        </>
    );
};
