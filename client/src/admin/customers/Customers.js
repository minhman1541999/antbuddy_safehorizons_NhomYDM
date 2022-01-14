import { Button, Container, Grid, Paper, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import Table from "../components/Table";
import { useHistory } from "react-router-dom";
import axios from "../api/axios";
import { Box } from "@mui/system";
const customerTableHead = ["", "Name", "Job", "TelNo", "Address", ""];

function Customers() {
  const [customers, setCustomers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.getData(`customers`).then((result) => {
      setCustomers(result);
    });
  }, []);

  const renderHead = (item, index) => <TableCell key={index}>{item}</TableCell>;

  const renderBody = (item, index) => (
    <TableRow key={index}>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.first_name + " " + item.last_name}</TableCell>
      <TableCell>{item.job_title}</TableCell>
      <TableCell align="right">{`$${item.business_phone}`}</TableCell>
      <TableCell>
        {item.address + " " + item.city + " " + item.state_province}
      </TableCell>
      <TableCell>
        <Button onClick={() => history.push(`/customers/${item.id}`)}>
          <EditIcon />
        </Button>
        <Button onClick={() => handleDelete(item.id)}>
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );

  const handleDelete = (id) => {
    axios.deleteData(`customers`, id);
    const remainingCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(remainingCustomers);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Table
              title="Customers List"
              topRight={
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    onClick={() => history.push(`/customers/new`)}
                    type="submit"
                    variant="contained"
                    sx={{ px: 1, width: "100px", height: 0.6 }}
                  >
                    New
                  </Button>
                </Box>
              }
              headData={customerTableHead}
              renderHead={(item, index) => renderHead(item, index)}
              bodyData={customers}
              renderBody={(item, index) => renderBody(item, index)}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Customers;
