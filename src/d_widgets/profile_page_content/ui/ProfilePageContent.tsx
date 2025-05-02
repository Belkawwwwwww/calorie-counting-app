import { AboutProfile } from '@/d_widgets/about_profile';
import { BodyMeasurements } from '@/d_widgets/body_measurements';
import { ProfileInfo } from '@/d_widgets/profile_info';
import { UpdateButton } from '@/g_shared/ui/update_button';
import { FC } from 'react';
import { Props } from '../type';
import { BtnContainer } from './style';

export const ProfilePageContent: FC<Props> = (props) => {
    return (
        <>
            <BtnContainer>
                <UpdateButton />
                <BodyMeasurements />
            </BtnContainer>
            <AboutProfile
                gender={props.gender}
                first_name={props.first_name}
                last_name={props.last_name}
            />
            <ProfileInfo
                gender={props.gender}
                target={props.target}
                growth={props.growth}
                activity={props.activity}
                weight={props.weight}
            />
        </>
    );
};
