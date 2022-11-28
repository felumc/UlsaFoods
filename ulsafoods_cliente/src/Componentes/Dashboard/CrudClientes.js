import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container } from 'reactstrap';

const CrudClientes = () => {

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


    const busqueda = () => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }

    }

    return (
        <div>
            <Container>
                <input type="text" id="myInput" onKeyUp={busqueda} placeholder="Buscar por nombre del cliente" title="Type in a name" />

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
                            <th>Correo</th>
                            <th>Contraseña</th>
                        </tr>
                    </thead>
                    <tbody className='tb'>{
                        cliente.map(item => (
                            item.rol === "Usuario"
                                ? <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.matricula}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.apepat}</td>
                                    <td>{item.apemat}</td>
                                    <td>{item.carrera}</td>
                                    <td>{item.correo}</td>
                                    <td>{item.contrasenia}</td>

                                </tr>
                                : null

                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default CrudClientes;