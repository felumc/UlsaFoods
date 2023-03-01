import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container, Alert } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import * as ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';

const CrudPedidos = () => {

    document.title = "Pedidos";
    // Obtenemos datos de los productos
    const [Productos, setProductos] = React.useState([])

    //Recuperamos todos los productos
    const obtenerProductos = async () => {
        const data = await fetch('http://localhost:9595/administrador/productos/');
        const datos = await data.json();
        setProductos(datos);
    }

    React.useEffect(() => {
        obtenerProductos();
    }, [])


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

    const navigate = useNavigate();

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
    const moverse = () =>{
       

        window.location.reload()

    }

    //Funcion para ver detalles
    const detalles = event => {

        const id_detalles = event.currentTarget.id;

        const root = ReactDOM.createRoot(document.getElementById('container'));

        const element = (
            <>
                <button onClick={moverse} className='dv'>Regresar</button>
                <br/><br/>

                <div id="Ped">{

                    Detalles.map(item => (

                        item.id_venta == id_detalles
                            ? <div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>ID del detalle {item.id}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">ID de la venta {item.id_venta}</Card.Subtitle>
                                        <Card.Text>
                                            {
                                                Productos.map(items => (
                                                    items.id == item.id_producto
                                                        ? <div>
                                                            <p>Nombre del producto : {items.nombre}</p>
                                                            <Card.Img variant="top" src={items.url_imagen} />
                                                        </div>

                                                        : null
                                                ))}

                                            <p>Cantidad : {item.cantidad}</p>
                                            <p>Total : $ {item.total_producto} MXN</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </div>
                            : null

                    ))
                }

                </div>
            </>
        )

        root.render(element);
    }

    return (
        <div>


            <Container id='container'>


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
                                    <td>$ {item.monto_final} MXN</td>
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
                                    <td>$ {item.monto_final} MXN</td>
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

export default CrudPedidos;