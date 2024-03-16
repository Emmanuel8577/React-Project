import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getSingleProduct = async () => {
            try {
                const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        getSingleProduct();
    }, [id]);

    const deleteProduct = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
            // Redirect to the home page after deleting
            window.location.href = '/'; // This will reload the page
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Product Details</h1>
            <div className='single-product-info'>
                <img src={product.image} height="250" width="250" alt={product.name} />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <p>{product.description}</p>

                <Link className='btn btn-primary m-2' to={`/${product.id}/update`}>Update</Link>
                <button className='btn btn-danger m-2' onClick={deleteProduct}>Delete</button>
            </div>
        </div>
    );
};

export default ProductDetail;
