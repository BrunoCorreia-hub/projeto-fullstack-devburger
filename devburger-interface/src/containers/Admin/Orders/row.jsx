import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { ImageCard, StatusSelect, Title } from './style';
import { FormatDate } from '../../../utils/FOrmatDate';
import { OrderStatusOptions } from './orderStatus';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

export function Row({row, orders, setOrders, statusUpdate}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState();

  async function statusUpdate(id, status){
    try {
      setLoading(true),
      await api.put(`orders/${id}`, { status });

      const newOrders = orders.map((order => order._id === id ? { ...order, status} : order));
      setOrders(newOrders);
    } catch (error) {
      toast.error('Erro ao atualizar pedido')
    } finally {
    setLoading(false)
    }
    
  }

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{FormatDate(row.date)}</TableCell>
        <TableCell>
          <StatusSelect 
          options={OrderStatusOptions.filter(status => status.id !== 0)}
           placeholder='Status...' 
           defaultValue={OrderStatusOptions.find((status) => status.value === row.status || null)}
           onChange={(status) => statusUpdate(row.orderId, status.value)}
           isLoading={loading}
           menuPortalTarget={document.body}
           />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                PEDIDO
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell><Title>Quantidade</Title></TableCell>
                    <TableCell><Title>Produto</Title></TableCell>
                    <TableCell><Title>Categoria</Title></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((prd) => (
                    <TableRow key={prd.orderId}>
                      <TableCell component="th" scope="row">
                        {prd.quantity}
                      </TableCell>
                      <TableCell>{prd.name}</TableCell>
                      <TableCell>{prd.category}</TableCell>
                      <TableCell>
                        <ImageCard src={prd.url} alt={prd.name} />
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  orders: PropTypes.array.isRequired,
  setOrders: PropTypes.func.isRequired,
  row: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};