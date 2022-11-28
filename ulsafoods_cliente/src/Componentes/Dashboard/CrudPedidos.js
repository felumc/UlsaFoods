import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


const InsertarEmpleado = () => {

    document.title = "Pedidos";

     // Obtenemos datos de los detalles
     const [Detalles, setDetalles] = React.useState([])

    //Recuperamos todos los detalles
    const obtenerDetalles = async () => {
        const data = await fetch('http://localhost:9595/administrador/det_ventas/');
        const datos = await data.json();
        setDetalles(datos);
    }

    React.useEffect(() => {
        obtenerDetalles();
    }, [])

    //Generar tabla
    const [pedido, setPedido] = React.useState([])

   

    React.useEffect(() => {
        obtenerDatos();
    }, [])

    // Mostrar-Ocultar Modal para ver detalles
    const [lgShow, setLgShow] = useState(false);

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:9595/administrador/ventas/');
        const pedidos = await data.json();
        setPedido(pedidos);
    }

    // Obtenemos datos del cliente de llave foranea
    const [foranea, setForanea] = React.useState([])

    React.useEffect(() => {
        obtenerForanea();
    }, [])

    const obtenerForanea = async () => {
        const data = await fetch('http://localhost:9595/administrador/clientes/');
        const foraneas = await data.json();
        setForanea(foraneas);
    }



    //Barra de busqueda

    const busqueda = () => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
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

    // Funcion para editar estado
    const editar = event => {

        const id_editar = event.currentTarget.id;
        fetch('http://localhost:9595/administrador/venta/' + id_editar, {

            method: 'PUT',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                estatus: "Completado"
            })
        })
        window.location.reload()
        window.scrollTo(0, document.body.scrollHeight);
    }

    //Funcion para ver detalles
    const detalles = event => {
        const id_editar = event.currentTarget.id;






        setLgShow(true);


    }
    return (
        <div>

            {/* Modal para editar */}
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Ver detelles
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id='modal-body'>
                    holi
                </Modal.Body>
            </Modal>
            <Container>


                <input type="text" id="myInput" onKeyUp={busqueda} placeholder="Buscar por el nombre del cliente" title="Type in a name" />

                <Table striped bordered hover id="myTable">
                    <thead className='t'>
                        <tr>
                            <th>Id Venta</th>
                            <th>Cliente</th>
                            <th>Fecha</th>
                            <th>Monto</th>
                            <th>Estatus</th>

                        </tr>
                    </thead>
                    <tbody className='tb'>{
                        pedido.map(item => (
                            item.estatus === "Procesando"
                                ? <tr key={item.id}>
                                    <td>{item.id}</td>
                                    {
                                        foranea.map(items => (
                                            items.id === item.id_cliente
                                                ? <td>{items.nombre} {items.apepat} {items.apemat}</td>
                                                : null
                                        ))
                                    }
                                    <td>{item.fecha}</td>
                                    <td>{item.monto_final}</td>
                                    <td>
                                        <Button id={item.id} onClick={editar} className='CRUD' variant="warning" >Finalizar</Button>{'     '}
                                        <Button id={item.id} onClick={detalles} className='CRUD' variant="primary">Ver detalles</Button>
                                    </td>
                                </tr>
                                : <tr key={item.id}>
                                    <td>{item.id}</td>
                                    {
                                        foranea.map(items => (
                                            items.id === item.id_cliente
                                                ? <td>{items.nombre} {items.apepat} {items.apemat}</td>
                                                : null
                                        ))
                                    }
                                    <td>{item.fecha}</td>
                                    <td>{item.monto_final}</td>
                                    <td>
                                        <Button variant="success" id={item.id} className='CRUD' disabled >{item.estatus}</Button>{'     '}
                                        <Button id={item.id} onClick={detalles} className='CRUD' variant="primary">Ver detalles</Button>
                                    </td>
                                </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div >
    );
};

export default InsertarEmpleado;