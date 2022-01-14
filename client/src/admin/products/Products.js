import { Button, Container, Grid, Paper, TableCell, TableRow } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";
import Table from "../components/Table"
import { useHistory } from "react-router-dom"
import axios from "../api/axios";
import { Box } from "@mui/system";
const productTableHead = [
    '',
    'Product name',
    'Description',
    'Category',
    'Standard cost',
    ''
]

function Products() {
    const [products, setProducts] = useState([])
    const history = useHistory()

    useEffect(() => {
        axios.getData(`products`).then((result) => {
            setProducts(result);
        });
    }, []);

    const renderHead = (item, index) => <TableCell key={index}>{item}</TableCell>

    const renderBody = (item, index) => (
        <TableRow key={index}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.product_name}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell align="right">{`$${item.category}`}</TableCell>
            <TableCell>{item.standard_cost} USD</TableCell>
            <TableCell>
                <Button onClick={() => history.push(`/products/${item.id}`)}><EditIcon /></Button>
                <Button onClick={() => handleDelete(item.id)}><DeleteIcon /></Button>
            </TableCell>
        </TableRow>
    )

    const handleDelete = (id) => {
        axios.deleteData(`products`, id)
        const remainingProducts = products.filter((product) => product.id !== id)
        setProducts(remainingProducts)
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Table
                            title="Products List"
                            topRight={
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button
                                        onClick={() => history.push(`/products/new`)}
                                        type="submit"
                                        variant="contained"
                                        sx={{ px: 1, width: "100px", height: 0.6 }}
                                    >
                                        New
                                    </Button>
                                </Box>
                            }
                            headData={productTableHead}
                            renderHead={(item, index) => renderHead(item, index)}
                            bodyData={products}
                            renderBody={(item, index) => renderBody(item, index)}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Products;