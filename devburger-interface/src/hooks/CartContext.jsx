import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const CartProvider = ({children}) => {
    const [ cartProduct, setCartProduct ] = useState([]);

    const putProductInCart = (product) => {
        const cartIndex = cartProduct.findIndex((prd) => prd.id === product.id);

        let newProductsInCart = [];

        if(cartIndex >= 0 ){
            newProductsInCart = cartProduct;
            newProductsInCart[cartIndex].quantity = newProductsInCart[cartIndex].quantity + 1;
            setCartProduct(newProductsInCart);
        } else {
            product.quantity = 1;
            newProductsInCart = [ ...cartProduct, product ];
            setCartProduct(newProductsInCart);
        }
        updateLocalStorage(newProductsInCart);
    };

    const cartCount = cartProduct.length;

    const updateLocalStorage = (products) => {
        localStorage.setItem('devburger:cart', JSON.stringify(products));
    };

    useEffect(() => {
        const cartInfo = localStorage.getItem('devburger:cart');

        if(cartInfo){
            setCartProduct(JSON.parse(cartInfo))
        }
    }, []);

    const clearCart = () => {
        setCartProduct([]);
        updateLocalStorage([]);
    };

    const deleteProduct = (productId) => {
        const cartIndex = cartProduct.filter((prd) => prd.id !== productId);
        setCartProduct(cartIndex);
        updateLocalStorage(cartIndex);
    };

    const increaseProduct = (productId) => {
        const newCart = cartProduct.map((prd) => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity + 1} : prd; 
        });
        setCartProduct(newCart);
        updateLocalStorage(newCart);
    };

    const decreaseProduct = (productId) => {
        const cartIndex = cartProduct.findIndex((prd) => prd.id === productId);

        if(cartProduct[cartIndex].quantity > 1){
             const newCart = cartProduct.map((prd) => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity - 1} : prd; 
        });
        setCartProduct(newCart);
        updateLocalStorage(newCart);
        } else {
            deleteProduct(productId);
        }
    };

    return(
        <CartContext.Provider value={{ cartProduct, putProductInCart, clearCart, deleteProduct, increaseProduct, decreaseProduct, cartCount }}>{children}</CartContext.Provider>
    )
};

export const useCart = () => {
    const context = useContext(CartContext);

    if(!context){
        throw new Error('useCart must a be valid context');

    }
    return context;
};