import {ProtectedRoute} from '@/c - pages/router-providers';
import {UserProfile} from '@/d - widgets/profile/UserProfile/ui/UserProfile';
import {Layout} from '@/g - shared/ui/layout';
import React from 'react';

export const ProfilePage = () => {
    return (
        <ProtectedRoute>
            <Layout>
                <UserProfile />
            </Layout>
        </ProtectedRoute>
    );
};
