import React, {useState, useEffect} from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowProducts from './components/ShowProducts';
import AddProduct from './components/AddProduct';
import NavBarMenu from './components/NavBarMenu';
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBarMenu/>
        <Routes>
          <Route path="/" element={<ShowProducts />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/:id/" element={<ProductDetail />} />
          <Route path="/:id/update" element={<UpdateProduct/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
