import { ProtectedRoute } from '@/c_pages/router_providers';
import { UserProfile } from '@/d_widgets/profile/user_profile/ui/UserProfile';
import React from 'react';

export const ProfilePage = () => {
    return (
        <ProtectedRoute>
            <UserProfile />
        </ProtectedRoute>
    );
};
