import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@mui/material";
import { Redirect, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "../api/axios";

function Details() {
  const [customer, setCustomer] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.getDataById(`customers`, id).then((result) => {
        setCustomer(result[0]);
      });
    }
  }, [id]);

  if (redirect) {
    return <Redirect to="/customers" />;
  }

  function handleChange(event) {
    const value = event.target.value;
    setCustomer({
      ...customer,
      [event.target.name]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      axios.updateData(`customers`, customer);
    } else {
      axios.createData(`customers`, customer);
    }
    setRedirect(true);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Last Name
                </InputLabel>
                <OutlinedInput
                  onChange={handleChange}
                  name="first_name"
                  value={customer.first_name || ""}
                  label="Last Name"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  First Name
                </InputLabel>
                <OutlinedInput
                  onChange={handleChange}
                  name="last_name"
                  value={customer.last_name || ""}
                  label="First Name"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Company</InputLabel>
                <OutlinedInput
                  onChange={handleChange}
                  name="company"
                  value={customer.company || ""}
                  label="Company"
                />
              </FormControl>
              <React.Fragment>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                    {id ? "Update" : "Create"}
                  </Button>
                </Box>
              </React.Fragment>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Details;
