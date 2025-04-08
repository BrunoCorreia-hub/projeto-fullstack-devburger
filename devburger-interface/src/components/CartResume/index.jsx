import { Container } from './style';
import { Button } from '../Button';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { FormatCurrency } from '../../utils/FormatCurrency';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function CartResume() {
    const [finalValue, setFinalValue] = useState(0);
    const [taxDelivery] = useState(1000);

    const { cartProduct, clearCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const allSum = cartProduct.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);
        setFinalValue(allSum);
    }, [cartProduct]);

    const submitOrder = async () => {
        const products = cartProduct.map((product) => {
            return { id: product.id, quantity: product.quantity }
        });
        if (finalValue <= 0) {
            return toast.error('Para finalizar o pedido é preciso adicionar um produto')
        } else {
            try {
                const response = await api.post('/orders', { products });

                if (response.status === 200 || response.status === 201) {
                    setTimeout(() => {
                        navigate('/pedido'),
                            clearCart()
                    }, 2000);

                    return toast.success('Pedido realizado com sucesso');
                }
            } catch (error) {
                if (error.response?.status === 401) {
                    return toast.error('Falha ao realizar pedido');
                } else {
                    return toast.error('Falha no sistema, tente novamente')
                }
            }
        }
    }
    console.log(submitOrder)

    return (
        <div>
            <Container>
                <div className="container-top">
                    <p className="title">Resumo do pedido</p>
                    <p className="item">Itens</p>
                    <p className="item-price">{FormatCurrency(finalValue)}</p>
                    <p className="tax-delivery">Taxa de entrega</p>
                    <p className="tax-delivery-price">{FormatCurrency(taxDelivery)}</p>
                </div>
                <div className='container-bottom'>
                    <p>Total</p>
                    <strong>{FormatCurrency(finalValue + taxDelivery)}</strong>
                </div>
            </Container>
            <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>
    )
};