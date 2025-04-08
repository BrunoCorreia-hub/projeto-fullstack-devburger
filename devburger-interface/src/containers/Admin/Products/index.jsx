import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormatCurrency } from '../../../utils/FormatCurrency';
import { ProductImage, Title, EditButton } from './style';
import { Delete, Edit } from '@mui/icons-material';
import { Check, XCircle } from '@phosphor-icons/react/dist/ssr';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');
            setProducts(data);
        }
        loadProducts();
    }, []);

    function isOffer(offer) {
        if (offer) {
            return <Check color='green' fontSize={27} />
        } else {
            return <XCircle color='red' fontSize={27} />
        }
    }

    const editProduct = (product) => {
        navigate('/admin/editar-produto', { state: { product } })
    }

    const deleteProduct = async (id) => {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este produto?");
        if (!confirmDelete) return;

        try {
          await api.delete(`/products/${id}`);

          toast.success("Produto deletado com sucesso");
          setProducts(products.filter(product => product.id !== id))
        } catch (error) {
            toast.error('Erro ao deletar')
        }


    }


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><Title>Nome</Title></TableCell>
                        <TableCell><Title>Categoria</Title></TableCell>
                        <TableCell><Title>Preço</Title></TableCell>
                        <TableCell><Title>Oferta</Title></TableCell>
                        <TableCell><Title>Imagem</Title></TableCell>
                        <TableCell><Title>Editar</Title></TableCell>
                        <TableCell><Title>Excluir</Title></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow
                            key={product.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {product.name}
                            </TableCell>
                            <TableCell>{product.category.name}</TableCell>
                            <TableCell>{FormatCurrency(product.price)}</TableCell>
                            <TableCell>{isOffer(product.offer)}</TableCell>
                            <TableCell>
                                <ProductImage src={product.url} />
                            </TableCell>
                            <TableCell align='center'>
                                <EditButton onClick={() => editProduct(product)}>
                                    <Edit />
                                </EditButton>
                            </TableCell>
                            <TableCell align='center'>
                                <EditButton onClick={() => deleteProduct(product.id)}>
                                    <Delete style={{ color: 'red' }} />
                                </EditButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}