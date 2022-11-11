import React from 'react';
import Navbar from '../../Componentes/Dashboard/NavbarDashboard';
import SlideBar from '../../Componentes/Dashboard/SlideBar';
import InsertarVentas from '../../Componentes/Dashboard/InsertarVentas';
import '../../Css/Dashboard/dashboard.css'

const Ventas = () => {
    return (
        <div>
            <Navbar />
            <div className='sldbar'>
                <SlideBar />
            </div>
            <div className='content'>
                <InsertarVentas />
            </div>
        </div>
    );
};

export default Ventas;