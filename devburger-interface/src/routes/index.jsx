import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Register, Menu, Cart, Orders, Products, NewProduct, EditProducts } from "../containers";
import { Header, Footer, PedidoRealiazado } from "../components";
import { AdminLayout } from "../layouts/AdminLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Home />
                <Footer />
            </>
        ),
    },
    {
        path: '/cardapio',
        element: (
            <>
                <Header />
                <Menu />
                <Footer />
            </>
        ),
    },
    {
        path: '/carrinho',
        element: (
            <>
                <Header />
                <Cart />
                <Footer />
            </>
        ),
    },
    {
        path: '/pedido',
        element: (
            <>
                <Header />
                <PedidoRealiazado />
                <Footer />
            </>
        ),
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/cadastro',
        element: <Register />
    },
    {
        path: "/admin",
        element: (
            <>
            <AdminLayout />
            <Footer />
            </>
        ), 
        
        children: [
          { path: "pedidos", element: <Orders /> },
          { path: "produtos", element: <Products /> },
          { path: "novo-produto", element: <NewProduct /> },
          { path: "editar-produto", element: <EditProducts /> },
        ],
      }
]);