import { NextRequest, NextResponse } from 'next/server';
import { isAuthSelector } from '@/f - entities/redux/session';
import { useAppSelector } from '@/g - shared/lib/store';

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
