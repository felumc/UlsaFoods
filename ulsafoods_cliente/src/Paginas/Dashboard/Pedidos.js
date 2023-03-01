import React from 'react';
import Navbar from '../../Componentes/Dashboard/NavbarDashboard';
import SlideBar from '../../Componentes/Dashboard/SlideBar';
import CrudPedidos from '../../Componentes/Dashboard/CrudPedidos';
import '../../Css/Dashboard/dashboard.css'

const Empleados = () => {
    return (
        <div>
            <Navbar />
            <div className='sldbar'>
                <SlideBar />
            </div>
            <div className='content'>
                <CrudPedidos />
            </div>
        </div>
    );
};

export default Empleados;