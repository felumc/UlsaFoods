import logo from '../images/logo2.png';
import burger from '../images/burger.jpg';


function Register() {
    const login = () => {
        window.location.href = '/';
    };
    return (
        <div className="CuadroLoginR">
            <div className="IzquierdaR">
                <a href="/#"><img src={burger} alt="Logo" /></a>
            </div>
            <div className="DerechaR">
                <a href="/#"><img src={logo} alt="Logo" /></a>
                <input type="text" id="id" className="input font" placeholder="ID" required/>
                <input type="text" id="nombre" className="input font" placeholder="Nombre" required/>
                <input type="text" id="apepat" className="input font" placeholder="Apellido Paterno" required/>
                <input type="text" id="apemat" className="input font" placeholder="Apellido Materno" required/>
                <select name="Carrera" id="carrera" className="input font" style={{'border-radius': '30px'}}>
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
                <input type="text" id="correo" className="input font" placeholder="Correo" required/>
                <input type="password" className="input font" name="password" id="password" placeholder="Contraseña" required />
                <button className="Entrar" type="submit" onClick={login}>
                    Sign Up
                </button>
                <button type="submit" className="button2" onClick={login}>
                    Login
                </button>
            </div>
        </div>

    )
}

export { Register }