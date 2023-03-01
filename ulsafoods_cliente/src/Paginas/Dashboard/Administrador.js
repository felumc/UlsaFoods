import React from 'react';
import Navbar from '../../Componentes/Dashboard/NavbarDashboard';
import SlideBar from '../../Componentes/Dashboard/SlideBar';
import CrudAdministrador from '../../Componentes/Dashboard/CrudAdministrador';
import '../../Css/Dashboard/dashboard.css'

const Administrador = () => {
    return (
        <div>
            <Navbar />
            <div className='sldbar'>
                <SlideBar />
            </div>
            <div className='content'>
                <CrudAdministrador />
            </div>
        </div>
    );
};

export default Administrador;