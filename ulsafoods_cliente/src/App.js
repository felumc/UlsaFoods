import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Inicio from './Paginas/Inicio';
import LoginPage from './Paginas/LoginPage';
import RegisterPage from './Paginas/RegisterPage';
//Rutas Dashboard
import Productos from '../src/Paginas/Dashboard/Productos';
import Clientes from '../src/Paginas/Dashboard/Clientes';
import Reportes from '../src/Componentes/Dashboard/Reportes';
import Empleados from './Paginas/Dashboard/Empleados';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Dashboard/clientes" element={<Clientes />} />
        <Route path="/Dashboard/productos" element={<Productos />} />
        <Route path="/Dashboard/empleados" element={<Empleados />} />
        <Route path="/Dashboard/reportes" element={<Reportes />} />
      </Routes>
    </>

  );
}

export default App;
