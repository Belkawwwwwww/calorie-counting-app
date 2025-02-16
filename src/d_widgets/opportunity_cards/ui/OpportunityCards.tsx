import { Image } from '@/g_shared/ui/image';
import { Counter, H1, ImageContainer, Opportunities } from './style';
import { menu } from '@/g_shared/lib/utils/menuDate';

export const OpportunityCards = () => {
    return (
        <Opportunities>
            {menu.map((item) => (
                <Counter key={item.id}>
                    <ImageContainer>
                        <Image src={item.imageUrl} />
                    </ImageContainer>

                    <H1>{item.title}</H1>
                    <>{item.text}</>
                </Counter>
            ))}
        </Opportunities>
    );
};
