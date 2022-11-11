import logo from '../images/logo2.png';
import burger from '../images/burger.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const login = () => {
        window.location.href = '/';
    };
    const navigate = useNavigate();

    // Envio de formulario

    const [matricula, setMatricula] = useState("");
    const [nombre, setNombre] = useState("");
    const [apepat, setApepat] = useState("");
    const [apemat, setApemat] = useState("");
    const [carrera, setCarrera] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:9595/administrador/cliente', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    matricula: matricula,
                    nombre: nombre,
                    apepat: apepat,
                    apemat: apemat,
                    carrera: carrera,
                    correo: correo,
                    contrasenia: contrasenia
                }),
            });
            if (res.status === 200) {
                alert("Usuario creado correctamente");
                navigate('/');
            } else {
                alert("Error al registrar");
                console.log("ocurrio un error")
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="CuadroLoginR">
            <div className="IzquierdaR">
                <a href="/#"><img src={burger} alt="Logo" /></a>
            </div>
            <div className="DerechaR">
                <form method="post" onSubmit={handleSubmit} className="FormR">
                    <a href="/#"><img src={logo} alt="Logo" /></a>
                    <input type="text" id="id" className="input font" placeholder="Matricula" required onChange={(e) => setMatricula(e.target.value)}/>
                    <input type="text" id="nombre" className="input font" placeholder="Nombre" required onChange={(e) => setNombre(e.target.value)}/>
                    <input type="text" id="apepat" className="input font" placeholder="Apellido Paterno" required onChange={(e) => setApepat(e.target.value)}/>
                    <input type="text" id="apemat" className="input font" placeholder="Apellido Materno" required onChange={(e) => setApemat(e.target.value)}/>
                    <select name="Carrera" id="carrera" className="input font" style={{'border-radius': '30px'}} onChange={(e) => setCarrera(e.target.value)}>
                        <option value="Contaduria">Contaduria Publica</option>
                        <option value="Negocios">Negocios Internacionales</option>
                        <option value="Administracion">Administracion Turistica</option>
                        <option value="Derecho">Derecho</option>
                        <option value="Psicologia">Psicologia</option>
                        <option value="Software">Ingenieria de Software</option>
                        <option value="Industrial">Ingenieria Industrial</option>
                        <option value="Mecatronica">Ingenieria Mecatronica</option>
                        <option value="Gastronomia">Gastronomia</option>
                        <option value="Arquitectura">Arquitectura</option>
                        <option value="Ambiental">Ingenieria Ambiental</option>
                        <option value="Civil">Ingenieria Civil</option>
                        <option value="Enfermeria">Enfermeria</option>
                        <option value="Fisioterapia">Fisioterapia</option>
                        <option value="Nutricion">Nutricion</option>
                        <option value="Ciencias en el Deporte">Ciencias en el Deporte</option>
                        <option value="Lenguas">Lenguas</option>
                        <option value="Gestion de las artes">Gestion de las artes</option>
                        <option value="Eduacion">Eduacion</option>
                        <option value="Comunicacion">Comunicacion</option>
                    </select>
                    <input type="text" id="correo" className="input font" placeholder="Correo Institucional" required onChange={(e) => setCorreo(e.target.value)}/>
                    <input type="password" className="input font" name="password" id="password" placeholder="Contraseña" required onChange={(e) => setContrasenia(e.target.value)}/>
                    <button className="Entrar" type="submit">
                        Registrarse
                    </button>
                    <button type="submit" className="button2" onClick={login}>
                        Login
                    </button>
                </form>
            </div>
        </div>

    )
}

export { Register }