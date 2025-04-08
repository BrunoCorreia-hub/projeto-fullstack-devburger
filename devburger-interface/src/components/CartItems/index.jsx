import { Table } from "../index";
import { useCart } from "../../hooks/CartContext";
import { FormatCurrency } from "../../utils/FormatCurrency";
import { QuantityButton, ProductImg, EmptyCar, TotalPrice, AddProduct } from './style';
import { BiArrowBack } from "react-icons/bi";

export function CartItems() {
    const { cartProduct, increaseProduct, decreaseProduct } = useCart();

    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProduct?.length ? (cartProduct.map(product => (
                    <Table.Tr key={product.id}>
                        <Table.Td>
                            <ProductImg src={product.url} />
                        </Table.Td>
                        <Table.Td>{product.name}</Table.Td>
                        <Table.Td>{FormatCurrency(product.price)}</Table.Td>
                        <Table.Td>
                            <QuantityButton>
                                <button onClick={() => decreaseProduct(product.id)}>-</button>
                                {product.quantity}
                                <button onClick={() => increaseProduct(product.id)}>+</button>
                            </QuantityButton>
                        </Table.Td>
                        <Table.Td>
                            <TotalPrice>
                                {FormatCurrency(product.price * product.quantity)}
                            </TotalPrice>
                        </Table.Td>
                    </Table.Tr>
                ))) : <EmptyCar>carrinho vazio</EmptyCar>}
                
            </Table.Body>
            <Table.Header>
                <Table.Tr>
                    <Table.Td>
                    <AddProduct to='/cardapio'><BiArrowBack />Adicionar mais produto</AddProduct>
                    </Table.Td>
                </Table.Tr>
            </Table.Header>
        </Table.Root>
    )
}