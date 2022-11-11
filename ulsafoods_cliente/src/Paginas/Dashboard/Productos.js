import React from 'react';
import Navbar from '../../Componentes/Dashboard/NavbarDashboard';
import SlideBar from '../../Componentes/Dashboard/SlideBar';
import InsertarProductos from '../../Componentes/Dashboard/InsertarProductos';
import '../../Css/Dashboard/dashboard.css'


const Productos = () => {
    
    return (
        <div>
            <Navbar />
            <div className='sldbar'>
                <SlideBar />
            </div>
            <div className='content'>
                <InsertarProductos />
            </div>
            
        </div>
    );
};

export default Productos;