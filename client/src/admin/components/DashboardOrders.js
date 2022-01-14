import * as React from 'react';
import axios from '../api/axios';
import Axios from 'axios';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TableCell, TableRow } from '@mui/material';
import Table from "./Table"
const ordersTableHead = ["", "Name", "Address", "Status", "Action"];
const status = [
  { name: 'New', id: 0 },
  { name: 'Invoiced', id: 1 },
  { name: 'Shipped', id: 2 },
  { name: 'Closed', id: 3 }
];

function DashboardOrders() {
  const [orders, setOrders] = React.useState([]);
  const [ordersFilter, setOrdersFilter] = React.useState([]);

  React.useEffect(() => {
    Axios.get(`http://localhost:8080/dashboardOrders`)
      .then((response) => {
        setOrders(response.data)
        setOrdersFilter(response.data.filter((order) => order.status_id === 0))
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  const renderFilters = (item, index) => <MenuItem key={index} value={item.id}>{item.name}</MenuItem>;

  const renderHead = (item, index) => <TableCell key={index}>{item}</TableCell>;

  const renderBody = (item, index) => (
    <TableRow key={index}>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.first_name + " " + item.last_name}</TableCell>
      <TableCell>
        {item.address + " " + item.city + " " + item.state_province}
      </TableCell>
      <TableCell>{item.status_name}</TableCell>
      <TableCell>{typeOfButton(item)}</TableCell>
    </TableRow>
  );

  const handleChoose = (event) => {
    const remainingOrders = orders.filter((order) => order.status_id === event.target.value);
    setOrdersFilter(remainingOrders)
  };

  const typeOfButton = (item) => {
    switch (item.status_id) {
      case 0:
        // return <Button onClick={() => handleAction(item)} variant="contained">Invoiced</Button>;
        return <Button variant="contained">Invoiced</Button>;
      case 1:
        return <Button variant="contained">Shipped</Button>;
      case 2:
        return <Button disabled variant="contained">Waiting...</Button>;
      case 3:
        return <Button variant="contained">Delete</Button>;
      default:
        return;
    }
  }

  //bấm nút cập nhật -> update trong db -> remove order trong ordersFilter -> update statusId của phần tử trong state orders

  // const handleAction = async (order) => {
  //
  //   const newOrder = await axios.getDataById(`orders`, order.id).then((result) => {
  //     return result[0]
  //   });
  //   newOrder.status_id = newOrder.status_id + 1
  //   await axios.updateData(`orders`, newOrder)

  //   const remainingOrdersFilter = ordersFilter.filter((item) => item.id !== order.id)
  //   setOrdersFilter(remainingOrdersFilter)
  //   // const orderNeedUpdate = orders.filter((order) => order.id === item.id)
  //   // const newOrders = orders
  //   // newOrders.map((order, index) => {
  //   //   if (order.id === orderNeedUpdate.id) {
  //   //     newOrders[index] = { status_id: (item.status_id + 1) };
  //   //   }
  //   //   return newOrders
  //   // })
  //   // setOrders(newOrders)
  // }

  return (
    // console.log(orders),
    <Table
      title="Orders"
      topRight={
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Filter</InputLabel>
            <Select
              defaultValue={0}
              label="Filter"
              onChange={handleChoose}
            >
              {
                status.map((item, index) => renderFilters(item, index))
              }
            </Select>
          </FormControl>
        </Box>
      }
      headData={ordersTableHead}
      renderHead={(item, index) => renderHead(item, index)}
      bodyData={ordersFilter}
      renderBody={(item, index) => renderBody(item, index)}
    />
  );
}

export default DashboardOrders;
