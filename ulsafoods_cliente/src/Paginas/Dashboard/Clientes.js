import React from 'react';
import Navbar from '../../Componentes/Dashboard/NavbarDashboard';
import SlideBar from '../../Componentes/Dashboard/SlideBar';
import InsertarClientes from '../../Componentes/Dashboard/InsertarClientes';
import '../../Css/Dashboard/dashboard.css'

const Clientes = () => {
    return (
        <div>
            <Navbar />
            <div className='sldbar'>
                <SlideBar />
            </div>
            <div className='content'>
                <InsertarClientes />
            </div>
        </div>
    );
};

export default Clientes;