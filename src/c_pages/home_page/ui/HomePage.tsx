import { Layout } from '@/g_shared/ui/layout';
import {
    Btn,
    BtnWrapper,
    Container,
    Counter,
    H1,
    Header,
    ImageContainer,
    Opportunities,
    ResponsiveButton,
    Text,
} from '../../../c_pages/home_page/ui/style';
import { Image } from '@/g_shared/ui/image';
import { RouteEnum } from '@/g_shared/model';
import { menu } from '../../../g_shared/lib/utils/menuDate';

export const HomePage = () => {
    return (
        <Layout>
            <Container>
                <Header>Добро пожаловать в здоровую жизнь</Header>
                <Opportunities>
                    {menu.map((item) => (
                        <Counter key={item.id}>
                            <ImageContainer>
                                <Image src={item.imageUrl} />
                            </ImageContainer>

                            <H1>{item.title}</H1>
                            <Text>{item.text}</Text>
                        </Counter>
                    ))}
                </Opportunities>
                <BtnWrapper>
                    <Btn href={RouteEnum.TEST}>
                        <ResponsiveButton $variant='secondary' type='submit'>
                            СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН
                        </ResponsiveButton>
                    </Btn>
                </BtnWrapper>
            </Container>
        </Layout>
    );
};
