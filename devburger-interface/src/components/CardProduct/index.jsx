import PropTypes from "prop-types";
import { Container, CardImage } from './style';
import { FormatCurrency } from "../../utils/FormatCurrency";
import { Button } from '../Button';
import { FaCartShopping } from "react-icons/fa6"; 
import { useCart } from "../../hooks/CartContext";

export function CardProduct({ product }){
    const {putProductInCart} = useCart();

    return(
        <Container>
            <CardImage src={product.url} alt={product.name}/>
            <div>
                <p>{product.name}</p>
                <strong>{FormatCurrency(product.price)}</strong>
            </div>
            <Button onClick={() => putProductInCart(product)}>
                <FaCartShopping />
            </Button>
        </Container>
    )
};

CardProduct.propTypes = {
    product: PropTypes.object,
};