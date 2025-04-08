import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Title, ContainerItems, NavLink } from './style';
import { useNavigate } from 'react-router-dom';

export function CategoryCarousel(){
    const [ categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await api.get('/categories');
                setCategories(data);
            } catch (error) {
                return toast.error('Erro ao buscar categorias');
            }
           
        };
        fetchCategories();
    },[]);

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
        tablet: { breakpoint: { max: 768, min: 460 }, items: 2 },
        mobile: { breakpoint: { max: 460, min: 0 }, items: 1 },
      };
    

    return(
        <Container>
            <Title>Categorias</Title>
            <Carousel 
            responsive={responsive}
            infinite={true}
            partialVisbile={false}
            itemClass='carousel-item'
            >
                {categories.map((category) => (
                    <ContainerItems key={category.id} imageUrl={category.url}>
                        <NavLink
                        onClick={() => (
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`
                                },
                                {
                                    replace: true,
                                }
                            )
                        )}
                        >{category.name}</NavLink>
                    </ContainerItems>
                ))}
            </Carousel>
        </Container>
    )
}