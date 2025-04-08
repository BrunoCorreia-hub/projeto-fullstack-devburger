import { Banner, Container, Content } from './style';
import { CategoryCarousel, OffersCarousel } from '../../components';

export function Home(){


    return(
        <main>
            <Banner>
                <h1>Bem-vindo!</h1>
            </Banner>
            <Container>
                <Content>
                    <CategoryCarousel />
                    <OffersCarousel />
                </Content>
            </Container>
        </main>
    )
}