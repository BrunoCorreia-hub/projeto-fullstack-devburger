import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { Title, Filter, FilterOption } from './style';
import { OrderStatusOptions } from './orderStatus';


export function Orders() {
  const [orders, setOrders] = useState([]);
  const [rows, setRows] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeOrder, setActiveOrder] = useState(0);

  useEffect(() => {
    async function LoadOrders() {
      const { data } = await api.get('/orders');
      setOrders(data);
      setFilter(data);
      console.log(data)
    }
    LoadOrders();

  }, []);

  const orderFiltered = (status) => {
    if (status.id === 0) {
      setFilter(orders);
    } else {
      const newFiltered = orders.filter((order) => order.status === status.value);
      setFilter(newFiltered);
    }
    setActiveOrder(status.id);
    
  }

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  };

  useEffect(() => {
    const newRows = filter.map(order => createData(order));
    setRows(newRows);
  }, [filter]);

  useEffect(() => {
    if(activeOrder === 0){
      setFilter(orders);
    } else {
      const statusIndex = OrderStatusOptions.findIndex( item => item.id === activeOrder);

      const newOrdersFiltered = orders.filter( order => order.status === OrderStatusOptions[statusIndex].value);
      setFilter(newOrdersFiltered);
    }
  }, [orders]);

  return (
    <>
    
      <Filter>
        {OrderStatusOptions.map((status) => (
          <FilterOption key={status.id}
            onClick={() => orderFiltered(status)}
            $isActive={activeOrder === status.id}
          >{status.label}</FilterOption>
        ))}

      </Filter>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell><Title>Pedido</Title></TableCell>
              <TableCell><Title>Cliente</Title></TableCell>
              <TableCell><Title>Data do pedido</Title></TableCell>
              <TableCell><Title>Status</Title></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.orderId} row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}