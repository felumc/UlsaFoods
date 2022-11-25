import { Login } from '../Componentes/Login/Login';
import { Container } from '../Componentes/General/Container';
import '../Css/Login/Login.css'

function LoginPage() {
    document.title = 'Login';
    return (
        <>
            <Container>
                <Login />
            </Container>
        </>
    )
}

export default LoginPage;