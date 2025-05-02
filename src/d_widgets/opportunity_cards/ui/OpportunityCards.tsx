import { menu } from '@/g_shared/lib/utils';
import { Image } from '@/g_shared/ui/image';
import { Counter, H1, ImageContainer, Opportunities } from './style';

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
