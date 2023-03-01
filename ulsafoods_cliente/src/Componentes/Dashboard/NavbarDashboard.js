import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavbarDashboard = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{ 'backgroundColor': '#3F4E4F' }} variant="dark" className='nav'>
                <Container>
                    <Navbar.Brand >ULSA FOODS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav.Link style={{color:"white"}} href="/">
                        Salir
                    </Nav.Link>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarDashboard;