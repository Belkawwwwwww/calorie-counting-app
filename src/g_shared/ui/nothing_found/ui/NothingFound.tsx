import { Container, ImageNothingFound, StyledImage, Text, Title } from "./style";

export const NothingFound = () => {
    const imageUrl = '/nothing_found.png';
    return (
        <Container>
            <ImageNothingFound>
                <StyledImage
                    src={imageUrl}
                />
            </ImageNothingFound>
            <Title>Упс,мы ничего не смогли найти!</Title>
            <Text>Попробуйте изменить поисковый запрос или создайте новый продукт, блюдо или рецепт</Text>
        </Container>
    )
}