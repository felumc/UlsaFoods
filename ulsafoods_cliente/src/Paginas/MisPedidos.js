import { Container } from '../Componentes/General/Container';
import { NavBar } from '../Componentes/Inicio/NavBar';
import { useLocation } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import React from 'react';


function MisPedidos() {
    const location = useLocation();

    document.title = 'Mis pedidos'

    const [pedido, setPedido] = React.useState([])
    React.useEffect(() => {
        obtenerDatos();
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:9595/administrador/ventas/');
        const pedidos = await data.json();
        setPedido(pedidos);
    }
    return (
        <>
            <NavBar >
            </NavBar >
            <Container>
            <h2>Mis pedidos</h2>
                {pedido.map((p) =>
                    p.id_cliente == location.state.id
                        ? <Toast key={p.id}>
                            <Toast.Header>
                                <img src="" className="rounded me-2" alt="" />
                                <strong className="me-auto">Estatus : {p.estatus}</strong>
                                <small>{p.fecha}</small>
                            </Toast.Header>
                            <Toast.Body>Monto : $ {p.monto_final} MXN</Toast.Body>
                        </Toast>
                        : null
                )}
            </Container>
        </>
    )
}
export default MisPedidos;