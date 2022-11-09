import { NavBar } from '../Componentes/Inicio/NavBar';
import {ProdNav} from '../Componentes/Inicio/ProdNav';
import { Container } from '../Componentes/General/Container';
import '../Css/Inicio/Inicio.css'

function Inicio() {
    return (
        <>
            <NavBar />
            <h2>Página de inicio</h2>
            <Container>
            <ProdNav/>
            </Container>
        </>
    )
}

export default Inicio