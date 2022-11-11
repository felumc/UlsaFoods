import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import * as FaIcons from 'react-icons/fa';

const Usuario = () => {
    return (
        <div>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Usuario"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="">Mi perfil</NavDropdown.Item>
                            <NavDropdown.Item href="">
                                Configuraciones
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">
                                <FaIcons.FaPersonBooth className='me-2' />Cerrar Sesi&oacute;n
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Usuario;