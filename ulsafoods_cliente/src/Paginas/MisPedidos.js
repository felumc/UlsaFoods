import { Container } from '../Componentes/General/Container';
import { NavBar } from '../Componentes/Inicio/NavBar';
import { useLocation } from 'react-router-dom';

function MisPedidos() {
    const location = useLocation();

    document.title = 'Mis pedidos'
    return (
        <>
            <NavBar >
            </NavBar >
            <Container>
            <h2>{location.state.correo}</h2>
            </Container>
        </>
    )
}
export default MisPedidos;