import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React, { useState } from 'react';

function NavBar(props) {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >ULSA FOODS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Inicio">Inicio</Nav.Link>
                            <Nav.Link href="#pricing">Mi perfil</Nav.Link>
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