import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
const InsertarEmpleado = () => {
    return (
        <div>
        <Container>
            <Button color='warning' className='float-right'>Insertar nuevo empleado</Button>
            <br/><br/>
            <Table>
                <thead>
                    <tr>
                    <th></th>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Cafeter&iacute;a</th>
                    <th>&Aacute;rea</th>
                    <th>Puesto</th>
                    <th>Salario</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {this.state.data.map((elemento)=>(
                        <tr>
                            <td><input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="elegir" aria-label="..." /></td>
                            <td>{elemento.id}</td>
                            <td>{elemento.nombre}</td>
                            <td>{elemento.cafeteria}</td>
                            <td>{elemento.precio}</td>
                            <td>{elemento.cantidad}</td>
                            <td><Button color="danger">Eliminar</Button></td>
                        </tr>
                    ))} */}
                </tbody>
            </Table>
        </Container>
    </div>
    );
};

export default InsertarEmpleado;