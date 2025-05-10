import { BodyMeasurements } from "@/d_widgets/body_measurements";
import { RouteEnum } from "@/g_shared/model";
import { useRouter } from "next/router";
import { Button } from "../../../g_shared/ui/button";
import { Image } from "../../../g_shared/ui/image";
import { BtnContainer, Photo, PhotoContainer, PhotoWrapper } from "./style";

export const HeaderProfile = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push(RouteEnum.TEST)
    }
    const imageUrl = '/person.png';
    return (
        <PhotoContainer>
            <PhotoWrapper>
                <Photo>
                    <Image
                        src={imageUrl}
                        alt={`Изображение профиля`}
                    />
                </Photo>
            </PhotoWrapper>
            <BtnContainer>
                <Button
                    onClick={handleClick}
                    $variant='primary'
                    $btnWidth='m'
                    $btnSquareSize='button--square--size-m'
                    type='submit'
                >
                    ОБНОВИТЬ ДАННЫЕ
                </Button>
                <BodyMeasurements />
            </BtnContainer>
        </PhotoContainer>
    )
}