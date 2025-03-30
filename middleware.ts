import { NextRequest, NextResponse } from 'next/server';
import { useAppSelector } from '@/g_shared/lib/store';
import { isAuthSelector } from '@/e_features/auth/model/selector';

const protectedRoutes = ['/main', '/profile'];

export function middleware(req: NextRequest, isAuth: boolean) {
    if (!isAuth && protectedRoutes.includes(req.nextUrl.pathname)) {
        const absoluteURL = new URL('/', req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}

export default function (req: NextRequest) {
    const isAuth = useAppSelector(isAuthSelector);
    return middleware(req, isAuth);
}
