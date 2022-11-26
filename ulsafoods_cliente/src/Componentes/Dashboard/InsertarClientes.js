import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,Container} from 'reactstrap';

const InsertarClientes= () => {

    document.title="Clientes";

    /* state = {
        data: data
    } */
    return (
        <div>
            <Container>
                <button  className='dv'>Insertar una nuevo cliente</button>
                <br/><br/>
                <Table striped bordered hover id="myTable">
                    <thead>
                        <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Fecha</th>
                        <th>Cafeter&iacute;a</th>
                        <th>Cliente</th>
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

export default InsertarClientes;