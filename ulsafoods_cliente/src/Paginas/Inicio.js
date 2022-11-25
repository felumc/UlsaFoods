import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                    p.categoria === categoria
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

                    <CardProd key={p.id} id={p.id} url_imagen={p.url_imagen} nombre={p.nombre} stock={p.stock} cafeteria={p.cafeteria} precio={p.price}>
                        <button onClick={() => addItem(p)} className="Agregar">Añadir a carrito</button>
                    </CardProd>
                ))}
            </div>
        </>
    );
}

function Cart() {



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
                                    <Form.Control style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPaterno">
                                    <Form.Label>Apellido Paterno</Form.Label>
                                    <Form.Control style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formMaterno">
                                    <Form.Label>Apellido Materno</Form.Label>
                                    <Form.Control style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" />
                                </Form.Group>
                            </Col>

                            <Col >
                                <Form.Group className="mb-3" controlId="formNombre">
                                    <Form.Label>Edificio</Form.Label>
                                    <Form.Control style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPaterno">
                                    <Form.Label>Carrera</Form.Label>
                                    <Form.Control style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formMaterno">
                                    <Form.Label>Salón</Form.Label>
                                    <Form.Control style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" />
                                </Form.Group>

                                <button style={{ width: '100%' }} className="Agregar" variant="success" type="submit" >
                                    Realizar pedido
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
                <h1>Total : $ {contador} MXN</h1>
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
            <button onClick={Total} style={{ width: '100%' }} className='Agregar'>Generar orden</button>

        </>
    );
}
function Inicio() {
    const [lgShow, setLgShow] = useState(false);



    document.title = 'Inicio';
    return (
        <>

            <NavBar >
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