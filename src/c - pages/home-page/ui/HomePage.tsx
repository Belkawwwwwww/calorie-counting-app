import Link from 'next/link';
import {RouteEnum} from '@/g - shared/model/navigation';
import {Button} from "@/g - shared/ui/Button";

export const HomePage = () => {
    return (
        <>
            <Button
                $btnWidth="l"
                $variant="primary"
                $btnSquareSize="button--square--size-m"
                onClick={() => console.log('Clicked!')}
            >
                Create My Plane
            </Button>
            <Link href={RouteEnum.LOGIN}>Авторизоваться</Link>
            <Link href={RouteEnum.REGISTRATION}>Регистрация</Link>
        </>
    );
};
