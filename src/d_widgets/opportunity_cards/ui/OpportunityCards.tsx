import { menu } from '@/g_shared/lib/utils';
import { Counter, H1, ImageContainer1, ImageContainer2, Opportunities, StyledImage } from './style';

export const OpportunityCards = () => {
    const imageUrl = '/Line_2.png';
    const imageUrl2 = '/Group_1.png';
    return (
        <Opportunities>
            <ImageContainer1>
                <StyledImage src={imageUrl} alt="Декоративная линия" />
            </ImageContainer1>
            {menu.map((item) => (
                <Counter key={item.id}>
                    <H1>{item.title}</H1>
                    <>{item.text}</>
                </Counter>
            ))}
            <ImageContainer2>
                <StyledImage src={imageUrl2} alt="Декоративная линия" />
            </ImageContainer2>
        </Opportunities>
    );
};
