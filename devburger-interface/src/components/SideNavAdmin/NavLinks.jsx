import { FaClipboard, FaBoxOpen, FaCartPlus, FaPencil } from 'react-icons/fa6';

export const NavLinks = [
    {
        id: 1,
        label: 'Pedidos',
        path: '/admin/pedidos',
        icon: <FaClipboard />,
    },
    {
        id: 2,
        label: 'Produtos',
        path: '/admin/produtos',
        icon: <FaBoxOpen />,
    },
    {
        id: 3,
        label: 'Adicionar produto',
        path: '/admin/novo-produto',
        icon: <FaCartPlus />,
    },
];