import { ProtectedRoute } from '@/c - pages/router-providers';
import { UserProfile } from '@/d - widgets/profile/UserProfile/ui/UserProfile';
import React from 'react';

export const ProfilePage = () => {
    return (
        <ProtectedRoute>
            <UserProfile />
        </ProtectedRoute>
    );
};
