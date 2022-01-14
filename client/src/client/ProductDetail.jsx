import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Rating from './Rating';
import '../assets/client/style.css';


function ProductDetail(props) {

    const id = props.match.params.id;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`)
            .then(res =>{
                setProduct(res.data)
        })
    
    
  }, [id]);
  

  return (
    <div>
        {product.map((val)=> {
            return (
                <div key={val.id} style={{overflow: 'hidden'}}>
                    <button style={{marginTop:'20px',marginLeft:'10px', backgroundColor:'#1A90F1'}}>
                        <Link style={{color:'#FFFFFF'}} to="/home">Back to result</Link>
                    </button>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h1 style={{ fontSize:'32px'}}>{val.product_name}</h1>
                    </div>
                    <div className="row top" style={{alignItems: 'center'}}>
                        <div className="col-4">
                            <img  src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" alt={val.product_name} />
                        </div>
                        <div  className="col-4">
                        <div  style={{marginLeft:'100px', marginBottom: '50px'}}>
                        <ul>
                            <li>Price : {val.standard_cost} USD</li>
                            <li>
                                Description : high quality goods
                            </li>
                            <li>Category : {val.category}</li>

                        </ul>
                        </div>
                        <div>
                        <div className="card card-body" style={{justifyContent: 'center', width: '350px', marginRight:'100px'}}>
                            <ul>
                            <li>
                                <h4>Seller{' '}</h4>
                                <h2>
                                    John
                                </h2>
                            </li>
                            <li>
                                <div className="row">
                                <div>Price :</div>
                                <div className="price">{val.standard_cost} USD</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                <div>Status : </div>
                                <div>
                                    {product.countInStock > 0 ? (
                                    <span className="success">In Stock</span>
                                    ) : (
                                    <span className="danger">Unavailable</span>
                                    )}
                                </div>
                                </div>
                            </li>
                            <li>
                                <button
                                // onClick={addToCartHandler}
                                className="primary block"
                                >
                                Add to Cart
                                </button>
                            </li>
                            </ul>
                        </div>
                        </div>
                        </div>
                    </div>
          
                </div>
            )
        })};
    </div>
              
  )

}

export default ProductDetail;