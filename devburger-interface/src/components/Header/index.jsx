import { BiUserCircle, BiClipboard } from "react-icons/bi";
import { Container, NavLink, ContainerInfo, ButtonExit, Navigation, CartButton, Count } from './style';
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from '../../hooks/UserContext';
import { toast } from "react-toastify";
import { useCart } from "../../hooks/CartContext";

export function Header() {
    const navigate = useNavigate();
    const { cartCount } = useCart();
    const { logOut, userInfo } = useUser();

    const { pathname } = useResolvedPath();

    return (
        <Container>
            <Navigation>
                <NavLink to='/' $isActive={pathname === '/'}>HOME</NavLink>
                <p>|</p>
                <NavLink to='/cardapio' $isActive={pathname === '/cardapio'}>CARDAPIO</NavLink>
            </Navigation>
            <ContainerInfo>
                <div className="container-login">
                    <BiUserCircle fontSize={40} color="#fff" />
                    <div>
                        <p>{userInfo?.name ? <>Ola, <span>{userInfo.name}</span></> : 'Faça login'}</p>
                        <ButtonExit
                            onClick={() => (
                                logOut(),
                                navigate('/login'),
                                toast.success('faça login')
                            )}
                        >Sair</ButtonExit>
                    </div>
                </div>
                <div className="container-cart">
                    <div className="container-clickboard">
                        <BiClipboard fontSize={45} color="#fff" />
                        <Count>{cartCount}</Count>
                    </div>
                    <CartButton to='/carrinho' $isActive={pathname === '/carrinho'}>Pedidos</CartButton>
                </div>
            </ContainerInfo>
        </Container>
    )
}