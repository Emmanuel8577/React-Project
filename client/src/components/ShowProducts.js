import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/');
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {/* Your navbar JSX */}
    
      <div className="products-card-info container">
        {products.map((product, index) => (
          <Card key={index} className='m-2 rounded shadow-lg' style={{ width: '22rem' }}>
            <Card.Img variant="top" src={product.image} height='300rem' />
            <Card.Body>
              <Card.Title className='add-products-nav'>{product.name}</Card.Title>
              <Card.Title className='add-products-nav'>${product.price}</Card.Title>
              <Card.Title className='add-products-nav'>{product.category}</Card.Title>
              <Link className='btn btn-primary' to={`/${product.id}/`}>View Details</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ShowProducts;
