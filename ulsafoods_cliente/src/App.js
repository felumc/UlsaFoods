import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Inicio from './Paginas/Inicio';
import LoginPage from './Paginas/LoginPage';
import RegisterPage from './Paginas/RegisterPage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Inicio" element={<Inicio />} />
      </Routes>
    </>

  );
}

export default App;
