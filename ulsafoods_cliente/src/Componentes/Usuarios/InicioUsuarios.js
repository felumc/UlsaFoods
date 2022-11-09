import React from 'react';
import { NavBar } from './NavBar';
import TablaGestionProductos from './TablaGestionProductos';
import '../../Css/Inicio/InicioUsuarios.css';

const InicioUsuarios = () => {
    return (
        <div>
            <NavBar/>
            <TablaGestionProductos/>
        </div>
    );
};

export default InicioUsuarios;