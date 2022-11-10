import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IconContext } from "react-icons";
import { BsFillCartFill } from "react-icons/bs";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function NavBar() {
    const [lgShow, setLgShow] = useState(false);

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
                                <button onClick={() => setLgShow(true)} className="carrito">
                                    <IconContext.Provider
                                        value={{ color: 'white', size: '20px' }}>
                                        <BsFillCartFill />
                                    </IconContext.Provider>
                                    <span className="Contador">0</span>
                                </button>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="/">
                                Salir
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Carrito de compras
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </>
    )
}
export { NavBar }