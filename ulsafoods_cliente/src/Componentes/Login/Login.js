import logo from '../images/logo2.png';
import burger from '../images/burger.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const inicio = () => {
        window.location.href = '/Inicio';
    };
    const register = () => {
        window.location.href = '/Register';
    };
    const navigate = useNavigate();

    // Envio de formulario
    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");

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
            if (res.status === 200) {
                navigate('/Inicio');
            } else {
                alert("Error al iniciar sesión, verifique sus datos");
                console.log("ocurrio un error")
            }
        } catch (err) {
            console.log(err);
        }
    };
    
    return (
        <div className="CuadroLogin">
            <div className="Izquierda">
                <a href="/#"><img src={burger} alt="Logo" /></a>
            </div>
            <div className="Derecha">
                <form method="post" onSubmit={handleSubmit} className="Form" >
                    <a href="/#"><img src={logo} alt="Logo" /></a>
                    <input type="text" id="correo" className="input font" placeholder="Correo Institucional" required onChange={(e) => setCorreo(e.target.value)} />
                    <input type="password" className="input font" name="password" id="password" placeholder="Contraseña" required onChange={(e) => setContrasenia(e.target.value)} />
                    <button className="Entrar" type="submit">
                        Login
                    </button>
                    <button type="submit" className="button2" onClick={register}>
                        Sign up
                    </button>
                </form>
            </div>
        </div>

    )
}

export { Login }