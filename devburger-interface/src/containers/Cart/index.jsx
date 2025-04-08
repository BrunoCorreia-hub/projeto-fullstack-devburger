import { Container, Banner, Content } from './style';
import LogoCart from '../../assets/Logo.svg';
import { CartItems, CartResume } from '../../components';

export function Cart() {

    return (
        <Container>
            <Banner>
                <img src={LogoCart} />
            </Banner>
            <h2>Checkout - pedido</h2>
            <Content>
                <CartItems />
                <CartResume />
            </Content>
        </Container>
    )
}