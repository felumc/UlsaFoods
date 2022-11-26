import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container } from 'reactstrap';

const InsertarClientes = () => {

    document.title = "Clientes";

    //  Variable para listar productos
    const [cliente, setCliente] = React.useState([])

    React.useEffect(() => {
        obtenerDatos();
    }, [])

    // Metodo get de la api
    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:9595/administrador/clientes/');
        const clientes = await data.json();
        setCliente(clientes);
    }

    return (
        <div>
            <Container>
                <br /><br />
                <Table striped bordered hover id="myTable">
                    <thead className='t'>
                        <tr>
                            <th>Id</th>
                            <th>Matricula</th>
                            <th>Nombre</th>
                            <th>Paterno</th>
                            <th>Materno</th>
                            <th>Carrera</th>
                            <th>Contraseña</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody className='tb'>{
                        cliente.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.paterno}</td>
                                <td>{item.materno}</td>
                                <td>{item.carrera}</td>
                                <td>{item.contrasenia}</td>
                                <td>{item.rol}</td>

                            </tr>))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default InsertarClientes;