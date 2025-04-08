import { Container, Banner, Content , ContentLink } from './style';
import LogoCart from '../../assets/Logo.svg'
import { FcOk } from 'react-icons/fc';
import { BiArrowBack } from "react-icons/bi";

export function PedidoRealiazado(){
   return(
     <Container>
                <Banner>
                    <img src={LogoCart} />
                </Banner>
                <h2>Checkout - pedido concluido</h2>
                <Content>
                  <FcOk fontSize={150} />
                   <h3>Obrigado!</h3>
                   <p>Seu pedido já está em produção e logo sairá<br />
                   para entrega. Agradecemos a preferência!</p>
                   <ContentLink to='/'><BiArrowBack />Voltar para o inicio</ContentLink>
                </Content>
            </Container>
   )
}