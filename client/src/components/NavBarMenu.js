import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBarMenu = () => {
    return (
        <div>
          <Navbar expand="lg" className="bg-body-tertiary">
                <Navbar.Brand href="#home">Products</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/"  className='show-products-nav'>Product</Nav.Link>
                    <Nav.Link href="/addProduct" className='add-products-nav'>AddProducts</Nav.Link>
                </Nav>
               
    </Navbar>
        </div>
    );
};

export default NavBarMenu;