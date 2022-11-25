import { Container } from '../Componentes/General/Container';
import { Register } from '../Componentes/Register/Register';
import '../Css/Register/Register.css'

function RegisterPage() {
    document.title = 'Registro';
    return (
        <>
            <Container>
                <Register />
            </Container>
        </>
    )
}

export default RegisterPage;