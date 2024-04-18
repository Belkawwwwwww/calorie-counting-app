import {Button} from "@/g - shared/ui";
import Link from "next/link";

export const HomePage = () => {

    return (
        <>
            <Button $btnWidth="m" $variant="primary" $btnSquareSize="button--square--size-m"
                    onClick={() => console.log("Clicked!")}>
                Create My Plane
            </Button>
            <Link href='/login'>Авторизоваться</Link>
            <Link href='/registration'>Регистрация</Link>
        </>


    )
}