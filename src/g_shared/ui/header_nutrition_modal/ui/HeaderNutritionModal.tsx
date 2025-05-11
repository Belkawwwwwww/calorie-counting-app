import { getImageSource } from "@/g_shared/lib/utils/imageUtils";
import { Image } from "../../image"
import { Container, ImagePickerWrapper, StImage, TitleBox } from "./style"
import { FC, useRef, useState } from "react";
import { Props } from "../type";

export const HeaderNutritionModal: FC<Props> = (props) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const imageSource = getImageSource(props.title);
    const image = '/camera.png'
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleChooseFromGallery = () => {
        if (fileInputRef.current) { // Проверяем, что fileInputRef.current не null
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <Container src={imageSrc}>
            <TitleBox>
                {imageSrc ? null : <Image src={imageSource} />}
            </TitleBox>
            <ImagePickerWrapper>
                <StImage onClick={handleChooseFromGallery}>
                    <Image src={image} />
                </StImage>
                <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    ref={fileInputRef}
                />
            </ImagePickerWrapper>
        </Container>

    )
}