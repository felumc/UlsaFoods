import React from 'react';
import * as ReactDOM from 'react-dom';


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

        console.log(event.currentTarget.id);


        // Busco el elemnto por id
        const root = ReactDOM.createRoot(document.getElementById('row'));
        // Renderizo el componente
        const element = (
            <CartProvider>
                {producto.map((p) => (
                    <CartProvider>
                    <CardProd id={p.id} url_imagen={p.url_imagen} nombre={p.nombre} stock={p.stock} cafeteria={p.cafeteria} precio={p.price}>
                        <button onClick={() => addItem(p)} className="Agregar">Añadir a carrito</button>
                    </CardProd>
                    </CartProvider>
                ))}
            </CartProvider>
            
        )
        // Le paso los parametros a renderizar
        root.render(element);

    }

    return (
        <>
            <div className='Botonera'>

                <button onClick={filtrar} className='S' >
                    <IconContext.Provider
                        value={{ color: '#A27B5C', size: '60px' }}>
                        < BiCoffeeTogo />
                    </IconContext.Provider>
                </button>

                <button className='S'>
                    <IconContext.Provider
                        value={{ color: '#A27B5C', size: '60px' }}>
                        < GiSodaCan />
                    </IconContext.Provider>
                </button>

                <button className='S'>
                    <IconContext.Provider
                        value={{ color: '#A27B5C', size: '60px' }}>
                        < GiChipsBag />
                    </IconContext.Provider>
                </button>

                <button className='S'>
                    <IconContext.Provider
                        value={{ color: '#A27B5C', size: '60px' }}>
                        < GiHamburger />
                    </IconContext.Provider>
                </button>

                <button className='S'>
                    <IconContext.Provider
                        value={{ color: '#A27B5C', size: '60px' }}>
                        < GiCakeSlice />
                    </IconContext.Provider>
                </button>

                <button className='S'>
                    <IconContext.Provider
                        value={{ color: '#A27B5C', size: '60px' }}>
                        < GiSandwich />
                    </IconContext.Provider>
                </button>

            </div>

            <br /><br />
            <div id="row" className="row">
                {producto.map((p) => (

                    <CardProd id={p.id} url_imagen={p.url_imagen} nombre={p.nombre} stock={p.stock} cafeteria={p.cafeteria} precio={p.price}>
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
                <Modal.Body>
                    <CartProvider>
                        <Cart />
                    </CartProvider>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default Inicio