import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from "styled-components";
// import Rating from './Rating';
import '../assets/client/style.css';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  transition: 0.7s;
  &:hover{
    opacity: 1;
    transform: translateY(-5px);
  }
`;

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

function Product() {

  const [prod, setProd] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/products')
      .then(res => {
        setProd(res.data);
      })
      .catch(error => console.log(error));
  }, []);




  return (
    <div className="prj" >
      {prod.map((val) => {
        return (
          <div key={val.id} className="card">
            <Container>
              {/* <Circle /> */}
              <Link to={`home/product/${val.id}`}>
                <img className="medium" src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" alt={val.product_name} />
              </Link>
              <div className="card-body" >
                <h2 style={{ padding: "0px", fontSize: "18px", height: "20px", display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical", overflow: "hidden" }}>{val.product_name}</h2>
                <div className="row" style={{ justifyContent: 'center', marginBottom: '10px', marginTop: '10px' }}>
                  <div className="price" style={{ fontSize: '17px' }}>{val.standard_cost} USD</div>
                </div>
                <button className="primary block" style={{ backgroundColor: '#1A90F1', color: '#FFFFFF' }}>
                  Add to Cart
                </button>
              </div>
            </Container>
          </div >
        );
      })}
    </div >

  );
}

export default Product