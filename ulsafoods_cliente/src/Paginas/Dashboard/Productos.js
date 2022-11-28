import React from 'react';
import Navbar from '../../Componentes/Dashboard/NavbarDashboard';
import SlideBar from '../../Componentes/Dashboard/SlideBar';
import CrudProductos from '../../Componentes/Dashboard/CrudProductos';
import '../../Css/Dashboard/dashboard.css'


const Productos = () => {
    
    return (
        <div>
            <Navbar />
            <div className='sldbar'>
                <SlideBar />
            </div>
            <div className='content'>
                <CrudProductos />
            </div>
            
        </div>
    );
};

export default Productos;