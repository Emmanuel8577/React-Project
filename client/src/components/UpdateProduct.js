import axios from 'axios';
import React, {useState, useEffect}from 'react';
import { Navigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {

    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")


    const { id } = useParams();


    const loadProducts = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}`);
        console.log(data)
        setImage(data.image)
        setName(data.name)
        setPrice(data.price)
        setCategory(data.category)
        setDescription(data.description)

    }


    useEffect(() => {
        loadProducts()
    }, [])

    const UpdateProductInfo = async () => {
        let formField = new FormData()
        formField.append(`name`, name)
        formField.append(`price`, price)
        formField.append(`category`, category)
        formField.append(`description`, description)
        if(image !== null) {
            formField.append(`image`, image)
        }

    await axios({
        method: 'PUT',
        url: `http://127.0.0.1:8000/api/`,
        data: formField
    }).then(response => {
        console.log(response.data)
        History.push(`/`)
    })
}
        
    return (
        <div>
            <h1> Update Product</h1>
            <div className='form-group'>
                <div className='form-group'>

                <img src={image}  alt='#'   height="165" width="150"/>

                 <input
                    type='file'
                    className='form-control form-control-lg'
                    name='image'
                    src={image}
                    onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className='form-group'>
                 <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Enter Product name'
                    name='name'
                    value={name}
                    onChange ={(e) => setName(e.target.value)}/>
                </div>
                <div className='form-group'>
                 <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Enter Product Price'
                    name='price'
                    value={price}
                    onChange ={(e) => setPrice(e.target.value)}/>
                </div>
                <div className='form-group'>
                 <textarea
                    className='form-control form-control-lg'
                    placeholder='Enter Product Description'
                    name='Description'
                    value={description}
                    onChange ={(e) => setDescription(e.target.value)}/>
                </div>
                <div className='form-group'>
                 <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Enter Product category'
                    name='category'
                    value={category}
                    onChange ={(e) => setCategory(e.target.value)}/>
                </div>
                <button className='btn  btn-success m-4' onClick={UpdateProductInfo}>Update Product</button>
            </div>
        </div>
    );
};

export default UpdateProduct;