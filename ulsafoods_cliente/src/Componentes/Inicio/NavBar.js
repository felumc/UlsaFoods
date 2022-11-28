import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react';

function NavBar(props) {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{'backgroundColor': '#3F4E4F'}}>
                <Container>
                    <Navbar.Brand >ULSA FOODS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Inicio">Inicio</Nav.Link>
                            <Nav.Link href="/Mispedidos">Mis pedidos</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                               {props.children}
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="/">
                                Salir
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

           
        </>
    )
}
export { NavBar }