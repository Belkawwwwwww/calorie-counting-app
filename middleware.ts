import {NextRequest, NextResponse} from "next/server";
import {isAuthSelector} from "@/f - entities/session";
import {useAppSelector} from "@/g - shared/lib/store";

const protectedRoutes = ['/main', '/profile']

export function middleware(req: NextRequest, isAuth: boolean) {
    // const isAuth = useAppSelector(isAuthSelector);
    if (!isAuth && protectedRoutes.includes(req.nextUrl.pathname)) {
        const absoluteURL = new URL('/', req.nextUrl.origin)
        return NextResponse.redirect(absoluteURL.toString())
    }

    // const {pathname} = req.nextUrl
    // if (isAuth && pathname === '/login') {
    //     return NextResponse.redirect(new URL('/main', req.url))
    // }
    // if (!isAuth && pathname !== '/login') {
    //     return NextResponse.redirect(new URL('/login', req.url))
    // }

}

export default function (req: NextRequest) {
    const isAuth = useAppSelector(isAuthSelector);
    return middleware(req, isAuth);

}

// export const config = {
//     matcher: '/((?!api|static|.*\\..*|_next).*)',
// };
