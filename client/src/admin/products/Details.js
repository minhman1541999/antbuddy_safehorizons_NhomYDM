import { Box, Button, Container, FormControl, Grid, InputLabel, OutlinedInput, Paper } from "@mui/material";
import { Redirect, useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "../api/axios";

function Details() {
    const [product, setProduct] = useState({})
    const [redirect, setRedirect] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            axios.getDataById(`products`, id).then((result) => {
                setProduct(result[0]);
            });
        }
    }, [id]);

    if (redirect) {
        return <Redirect to="/products" />;
    }

    function handleChange(event) {
        const value = event.target.value;
        setProduct({
            ...product,
            [event.target.name]: value,
        });

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (id) {
            axios.updateData(`products`, product)
        } else {
            axios.createData(`products`, product)
        }
        setRedirect(true)
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Product name</InputLabel>
                                <OutlinedInput
                                    onChange={handleChange}
                                    name="product_name"
                                    value={product.product_name || ""}
                                    label="Product name"
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
                                <OutlinedInput
                                    onChange={handleChange}
                                    name="description"
                                    value={product.description || ""}
                                    label="Description"
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Category</InputLabel>
                                <OutlinedInput
                                    onChange={handleChange}
                                    name="category"
                                    value={product.category || ""}
                                    label="Category"
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Standard cost</InputLabel>
                                <OutlinedInput
                                    onChange={handleChange}
                                    name="standard_cost"
                                    value={product.standard_cost || ""}
                                    label="Standard cost"
                                />
                            </FormControl>
                            <React.Fragment>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        { id ? "Update" : "New"}
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
