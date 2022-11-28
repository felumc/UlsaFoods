import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'
// Componente barra de navegación
import { NavBar } from '../Componentes/Inicio/NavBar';

// Componente de tarjetas de productos
import { CardProd } from '../Componentes/Inicio/CardProd';

// Componente de contenedor responsive
import { Container } from '../Componentes/General/Container';

// Componente de iconos bootstrap
import { IconContext } from "react-icons";

// Iconos
import { BsFillCartFill } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import { GiSodaCan } from "react-icons/gi";
import { GiChipsBag } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { GiCakeSlice } from "react-icons/gi";
import { GiSandwich } from "react-icons/gi";

import { useNavigate } from 'react-router-dom';



// Componente de modal de bootstrap
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import '../Css/Inicio/Inicio.css'

// Componente de carrito
import { CartProvider, useCart } from "react-use-cart";



function Page() {

    const { addItem } = useCart();

    const [producto, setProducto] = React.useState([])
    React.useEffect(() => {
        obtenerDatos();
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:9595/administrador/productos/');
        const productos = await data.json();
        setProducto(productos);
    }

    // Listar productos especificos
    const filtrar = event => {


        const categoria = event.currentTarget.value;

        // Busco el elemnto por id
        const root = ReactDOM.createRoot(document.getElementById('row'));



        // Renderizo el componente
        const element = (
            <CartProvider>
                {producto.map((p) => (
                    p.categoria === categoria && p.estado === "Activo"
                        ? (<CardProd key={p.id} id={p.id} url_imagen={p.url_imagen} nombre={p.nombre} stock={p.stock} cafeteria={p.cafeteria} precio={p.price}>
                            <button onClick={() => addItem(p)} className="Agregar">Añadir a carrito</button>
                        </CardProd>)
                        : null

                ))}
            </CartProvider>

        )
        // Le paso los parametros a renderizar
        root.render(element);

    }

    return (
        <>
            <div className='Botonera'>

                <button value="Cafe" onClick={filtrar} className='S' >
                    <IconContext.Provider
                        value={{ color: '#A27B5C', size: '60px' }}>
                        < BiCoffeeTogo />
                    </IconContext.Provider>
                </button>

                <button value="Refresco" onClick={filtrar} className='S'>
                    <IconContext.Provider
                        value={{ color: '#A27B5C', size: '60px' }}>
                        < GiSodaCan />
                    </IconContext.Provider>
                </button>

                <button value="Sabritas" onClick={filtrar} className='S'>
                    <IconContext.Provider
                        value={{ color: '#A27B5C', size: '60px' }}>
                        < GiChipsBag />
                    </IconContext.Provider>
                </button>

                <button value="Hamburguesa" onClick={filtrar} className='S'>
                    <IconContext.Provider
                        value={{ color: '#A27B5C', size: '60px' }}>
                        < GiHamburger />
                    </IconContext.Provider>
                </button>

                <button value="Pastel" onClick={filtrar} className='S'>
                    <IconContext.Provider
                        value={{ color: '#A27B5C', size: '60px' }}>
                        < GiCakeSlice />
                    </IconContext.Provider>
                </button>

                <button value="Baguette" onClick={filtrar} className='S'>
                    <IconContext.Provider
                        value={{ color: '#A27B5C', size: '60px' }}>
                        < GiSandwich />
                    </IconContext.Provider>
                </button>

            </div>

            <br /><br />
            <div id="row" className="row">
                {producto.map((p) => (
                    p.estado === "Activo"
                        ? <CardProd key={p.id} id={p.id} url_imagen={p.url_imagen} nombre={p.nombre} stock={p.stock} cafeteria={p.cafeteria} precio={p.price}>
                            <button onClick={() => addItem(p)} className="Agregar">Añadir a carrito</button>
                        </CardProd>
                        : null
                ))}
            </div>
        </>
    );
}

function Cart() {



    const location = useLocation();

    // Variable para listar cliente con id especifico
    const [Cliente, setCliente] = React.useState([])

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:9595/administrador/cliente/' + location.state.correo);
        const clientes = await data.json();
        setCliente(clientes);
    }

    React.useEffect(() => {
        obtenerDatos();
    }, [])


    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,

    } = useCart();

    if (isEmpty) return <p>Tu carrito esta vacío</p>;

    // Mapeo para encontrar el total de todos los productos del carrito
    const Total = () => {

        var contador = 0;
        items.map((item) => (
            contador = contador + (item.quantity * item.price)

        ))
        // Busco elemento del modal
        const root = ReactDOM.createRoot(document.getElementById('modal-body'));
        const root2 = ReactDOM.createRoot(document.getElementById('example-modal-sizes-title-lg'));

        // Renderizo el componente
        const element = (
            <>
                <Form  >
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formNombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control disabled value={Cliente.nombre} style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPaterno">
                                    <Form.Label>Apellido Paterno</Form.Label>
                                    <Form.Control disabled value={Cliente.apepat} style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formMaterno">
                                    <Form.Label>Apellido Materno</Form.Label>
                                    <Form.Control disabled value={Cliente.apemat} style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" />
                                </Form.Group>
                            </Col>

                            <Col >
                                <Form.Group className="mb-3" controlId="formCarrera">
                                    <Form.Label>Carrera</Form.Label>
                                    <Form.Control disabled value={Cliente.carrera} style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formCorreo">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control disabled value={Cliente.correo} style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formMatricula">
                                    <Form.Label>Matrícula</Form.Label>
                                    <Form.Control disabled value={Cliente.matricula} style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" />
                                </Form.Group>


                            </Col>
                        </Row>
                    </Container>
                </Form>
                <button onClick={Venta} style={{ width: '100%' }} className="Agregar_f"   >
                    Realizar pedido
                </button>
                <br /><br />
                <h1 id="Total" name={contador} >Total : $ {contador} MXN</h1>
            </>
        )
        // Renderizo el componente
        const element2 = (
            <>
                Pago
            </>
        )
        // Le paso los parametros a renderizar
        root.render(element);
        // Le paso los parametros a renderizar
        root2.render(element2);
    }

    //Funcion para realizar la venta
    const Venta = () => {
        var contador = 0;

        // Obtenemos el valor del id del cliente
        const id_c = Cliente.id;
        // Obtnemos el valor del total
        const Total = document.getElementById("Total").getAttribute("name");
        // Generamos valor de estatus
        const estatus = "Procesando";
        // Generamos el valor de la fecha
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '/' + mm + '/' + dd;

        // Consumo de la api para metodo post y generar tabla venta
        let venta = async () => {
            let final;
            try {

                let res = await fetch('http://localhost:9595/administrador/venta', {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id_cliente: id_c,
                        fecha: today,
                        monto_final: Total,
                        estatus: estatus
                    })
                })
                    .then(res => res.json())
                    .then(data => final = data.id)

                    .catch(err => {
                        console.error(err);
                    })

                // Rellenado de detalle 

                items.map((item) => (
                    fetch('http://localhost:9595/administrador/det_venta', {

                        method: 'POST',
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            id_venta: final,
                            id_producto: item.id,
                            cantidad: item.quantity,
                            total_producto: item.quantity * item.price
                        })

                    })//,
                    //Ignorar
                    //alert("holi"),
                    //contador = contador + item.id
                ))

                console.log(final);
                console.log(contador)
                console.log(items.length)


                Swal.fire({
                    icon: 'success',
                    title: 'Pedido generado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })

                //limpiar variables
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al generar pedido',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(err);
            }


        };

        venta()

    }

    return (
        <>
            <h3>Carrito ({totalUniqueItems})</h3>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.quantity} x {item.nombre}
                        <button className='restar'
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                            -
                        </button>
                        <button className='agregar'
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                            +
                        </button>
                        <button className='eliminar' onClick={() => removeItem(item.id)}>&times;</button>
                    </li>
                ))}
            </ul>
            <button onClick={Total} style={{ width: '100%' }} className='Agregar_f'>Generar orden</button>

        </>
    );
}
function Inicio() {
    const [lgShow, setLgShow] = useState(false);

    const location = useLocation();

    // Variable para listar cliente con id especifico
    const [Cliente, setCliente] = React.useState([])



    const obtenerDatos = async () => {

        const data = await fetch('http://localhost:9595/administrador/cliente/' + location.state.correo);
        const clientes = await data.json();
        setCliente(clientes);
    }

    React.useEffect(() => {

        obtenerDatos();
    }, [])

    document.title = 'Inicio';
    const navigate = useNavigate();
    const Clie = Cliente.id;
    const prueba = ()=>{
        navigate('/MisPedidos',{state:{id:Clie}});

    }
    return (
        <>
             <button onClick={prueba}>Prueba</button> 
            <NavBar >
           
                <span className='Identificador'>Bienvenido {Cliente.nombre} 👋</span>
                <button onClick={() => setLgShow(true)} className="carrito">
                    <IconContext.Provider
                        value={{ color: 'white', size: '20px' }}>
                        <BsFillCartFill />

                    </IconContext.Provider>

                </button>


            </NavBar >

            <Container>

                <h2>¿Qué necesitas?</h2>



                <CartProvider>
                    <Page />

                </CartProvider>
            </Container>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Detalle
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id='modal-body'>
                    <CartProvider>
                        <Cart />
                    </CartProvider>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default Inicio