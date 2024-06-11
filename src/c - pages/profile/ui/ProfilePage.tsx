import {AuthLayout} from '@/c - pages/isAuth';
import {UserProfile} from '@/d - widgets/profile/UserProfile/ui/UserProfile';
import {Layout} from '@/g - shared/ui/layout';
import React from 'react';

export const ProfilePage = () => {
    return (
        <AuthLayout>
            <Layout>
                <UserProfile />
            </Layout>
        </AuthLayout>
    );
};
