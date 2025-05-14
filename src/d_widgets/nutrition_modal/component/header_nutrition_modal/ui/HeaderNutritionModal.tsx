import { getImageSource } from "@/g_shared/lib/utils/imageUtils";
import { Image } from "../../../../../g_shared/ui/image"
import { Container, ImagePickerWrapper, StImage, TitleBox } from "./style"
import { FC, useEffect, useRef, useState } from "react";
import { Props } from "../type";
import { useMealDataContext } from "@/g_shared/lib/context";
import { ImageOptionsModal } from "../../../../../g_shared/ui/image_options_modal";
import { useModalOpen } from "@/g_shared/lib/hooks";

export const HeaderNutritionModal: FC<Props> = (props) => {
    const { isModalActive, handleModalOpen, handleModalClose } = useModalOpen();
    const { formattedDate } = useMealDataContext();
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const imageSource = getImageSource(props.title);
    const cameraIcon = '/camera.png'
    const fileInputRef = useRef<HTMLInputElement>(null);
    const localStorageKey = `headerImage-${formattedDate}-${props.title}`;
    useEffect(() => {
        const storedImage = localStorage.getItem(localStorageKey);
        if (storedImage) {
            setImageSrc(storedImage);
        }
    }, [formattedDate, props.title, localStorageKey]);
    const handleChooseFromGallery = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImageSrc = reader.result as string
                setImageSrc(newImageSrc);
                localStorage.setItem(localStorageKey, newImageSrc);
                handleModalClose()
            };
            reader.readAsDataURL(file);
        }
    };
    const handleDeleteImage = () => {
        localStorage.removeItem(localStorageKey);
        setImageSrc(null);
        handleModalClose()
    };

    return (
        <Container src={imageSrc}>
            <TitleBox>
                {imageSrc ? null : <Image src={imageSource} />}
            </TitleBox>
            <ImagePickerWrapper>
                <StImage onClick={imageSrc ? handleModalOpen : handleChooseFromGallery}>
                    <Image src={cameraIcon} />
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
            {isModalActive ? (
                <ImageOptionsModal
                    onClose={handleModalClose}
                    onDelete={handleDeleteImage}
                    onChooseNew={handleChooseFromGallery}
                />
            ) : null}
        </Container>
    );
};