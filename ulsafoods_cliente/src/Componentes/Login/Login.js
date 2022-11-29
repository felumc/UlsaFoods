// Importación de componentes y librerias
import logo from '../images/logo2.png';
import burger from '../images/burger.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Login() {

    // Función para mandar a pagina de registro
    const register = () => {
        navigate('/Register');
    };

    const navigate = useNavigate();

    // Variables para enviar datos a api
    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    // Metodo post a api rest
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:9595/administrador/cliente/login', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    correo: correo,
                    contrasenia: contrasenia
                }),
            });
            if (res.status === 201) {
                // En caso del login ser correcto regresa un estatus 201 y manda al inicio
                navigate('/Inicio', { state: { correo: correo } });

            }
            if (res.status === 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al iniciar sesión',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log("ocurrio un error")
            }
            // Validacion en caso de ser un administrador
            if (res.status === 200) {
                navigate('/Dashboard/productos');
            }
        } catch (err) {
            console.log(err);

        }
    };

    return (
        // Componente html del formulario
        <div className="CuadroLogin">
            <div className="Izquierda">
                <a href="/#"><img src={burger} alt="Logo" /></a>
            </div>
            <div className="Derecha">
                <form method="post" onSubmit={handleSubmit} className="Form" >
                    <a href="/#"><img src={logo} alt="Logo" /></a>
                    <input type="text" id="correo" className="input font" placeholder="Correo Institucional" onChange={(e) => setCorreo(e.target.value)} />
                    <input type="password" className="input font" name="password" id="password" placeholder="Contraseña" onChange={(e) => setContrasenia(e.target.value)} />
                    <button className="Entrar" type="submit">
                        Login
                    </button>
                    <button className="button2" onClick={register}>
                        Registrarse
                    </button>
                </form>
            </div>
        </div>

    )
}

export { Login }