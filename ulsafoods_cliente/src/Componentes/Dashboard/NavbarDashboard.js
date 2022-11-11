import { Dropdown } from 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Usuario from '../../Componentes/Dashboard/Usuario';

const NavbarDashboard = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav'>
                <Container>
                    <Navbar.Brand >ULSA FOODS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="ms-auto" navbar>
                            <Usuario />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarDashboard;