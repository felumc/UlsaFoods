import { NavBar } from '../Componentes/Inicio/NavBar';
import {ProdNav} from '../Componentes/Inicio/ProdNav';
import {CardProd} from '../Componentes/Inicio/CardProd';
import { Container } from '../Componentes/General/Container';
import '../Css/Inicio/Inicio.css'
function Inicio() {
    return (
        <>
            <NavBar />
            <Container>
            <ProdNav/>
            <br/>
            <CardProd/>
            </Container>
        </>
    )
}

export default Inicio