import { NavBar } from '../Componentes/Inicio/NavBar';
import { ProdNav } from '../Componentes/Inicio/ProdNav';
import { CardProd } from '../Componentes/Inicio/CardProd';
import { Container } from '../Componentes/General/Container';
import React from 'react';
import { IconContext } from "react-icons";
import { BsFillCartFill } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import '../Css/Inicio/Inicio.css'
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


    return (
        <>

            <div className="row">
                {producto.map((p) => (
                    <CardProd id={p.id} url_imagen={p.url_imagen} nombre={p.nombre} stock={p.stock} cafeteria={p.cafeteria} precio={p.price}>
                        <button onClick={() => addItem(p)} className="Agregar">Agregar a carrito</button>
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
        </>
    );
}
function Inicio() {
    const [lgShow, setLgShow] = useState(false);


    return (
        <>


            {/* <ProdNav/> */}
            <NavBar >
                <button onClick={() => setLgShow(true)} className="carrito">
                    <IconContext.Provider
                        value={{ color: 'white', size: '20px' }}>
                        <BsFillCartFill />
                    </IconContext.Provider>
                    {/* <span className="Contador"></span>  */}
                </button>
            </NavBar >
            <Container>
                <h2>Página de inicio</h2>
                <CartProvider>
                    <Page />
                    {/* <Cart /> */}
                    <Modal
                        size="lg"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                <h1>Pago</h1>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>


                            <Cart />

                        </Modal.Body>
                    </Modal>
                </CartProvider>
            </Container>

        </>
    )
}

export default Inicio