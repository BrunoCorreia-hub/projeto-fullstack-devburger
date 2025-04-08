import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Title } from './style';
import { CardProduct } from '../CardProduct';

export function OffersCarousel(){
    //const [ products, setProducts ] = useState([]);
    const [ offers, setOffers ] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await api.get('/products');
                
                const offersProducts = await data.filter((offers) => offers.offer);
                
                setOffers(offersProducts);

            } catch (error) {
                return toast.error('Erro ao buscar produtos');
            }
           
        };
        fetchCategories();
    },[]);
    

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
      };
    

    return(
        <Container>
            <Title>Ofertas do Dia</Title>
            <Carousel 
            responsive={responsive}
            infinite={true}
            partialVisbile={false}
            itemClass='carousel-item'
            >
                {offers.map((product) => (
                    <CardProduct key={product.id} product={product}/>
                ))}
            </Carousel>
        </Container>
    )
}