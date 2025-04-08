import { Container, Banner, CategoryMenu, ProductsMenu, CategoryButton } from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { CardProduct } from '../../components/CardProduct';

export function Menu() {
    const [ products, setProducts ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ filteredProducts, setFilteredProducts ] = useState([]);
    const navigate = useNavigate();

    const { search } = useLocation();

    const queryParams = new URLSearchParams(search);

    const [ activeCategory, setActiveCategory ] = useState(() => {
        const categoryId = +queryParams.get('categoria');

        if(categoryId){
            return categoryId;
        }
        return 0;
    });


    useEffect(() => {
        const loadProducts = async () => {
            const { data } = await api.get('/products');
            setProducts(data);
        };

        const loadCategories = async () => {
            const { data } = await api.get('/categories');
            const newData = [{ id: 0, name: 'Todas'}, ...data];
            setCategories(newData);
        };
        loadProducts();
        loadCategories();
    }, []);

    useEffect(() => {
        if(activeCategory === 0){
            return setFilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter( product => product.category_id === activeCategory);
            return setFilteredProducts(newFilteredProducts);
        }
    }, [products, activeCategory]);

    return (
        <Container>
            <Banner>
                <h3>
                    O MELHOR<br />
                    HAMBÚRGUER<br />
                    ESTÁ AQUI!
                </h3>
                <p>Esse cardapio está irresistivel!</p>
            </Banner>
            <CategoryMenu>
                {categories.map(category => (
                    <CategoryButton 
                    key={category.id}
                    $isActiveCategory={category.id === activeCategory}
                    onClick={() => {
                        navigate(
                            {
                                pathname: '/cardapio',
                                search: `?categoria=${category.id}`
                            },
                            {
                                replace: true,
                            }
                        )
                       setActiveCategory(category.id)
                    }}
                    >{category.name}</CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsMenu>
                {filteredProducts.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </ProductsMenu>
        </Container>
    )
}