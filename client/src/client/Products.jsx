import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {

  // const [prod, setProd] = useState([]);

  // const us = useEffect(() => {
  //     axios.get('http://localhost:8080/api/products')
  //         .then(res => {
  //             console.log(res.data)
  //             setProd(res.data);
  //         })
  //         .catch(error => console.log(error));
  // }, []);

  return (
    <Container>
        <Product  />
    </Container>
  );
};

export default Products;
