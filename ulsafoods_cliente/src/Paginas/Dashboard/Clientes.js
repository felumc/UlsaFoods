import React from 'react';
import Navbar from '../../Componentes/Dashboard/NavbarDashboard';
import SlideBar from '../../Componentes/Dashboard/SlideBar';
import CrudClientes from '../../Componentes/Dashboard/CrudClientes';
import '../../Css/Dashboard/dashboard.css'

const Clientes = () => {
    return (
        <div>
            <Navbar />
            <div className='sldbar'>
                <SlideBar />
            </div>
            <div className='content'>
                <CrudClientes />
            </div>
        </div>
    );
};

export default Clientes;