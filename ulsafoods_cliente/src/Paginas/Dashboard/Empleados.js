import React from 'react';
import Navbar from '../../Componentes/Dashboard/NavbarDashboard';
import SlideBar from '../../Componentes/Dashboard/SlideBar';
import InsertarEmpleado from '../../Componentes/Dashboard/InsertarEmpleado';
import '../../Css/Dashboard/dashboard.css'

const Empleados = () => {
    return (
        <div>
            <Navbar />
            <div className='sldbar'>
                <SlideBar />
            </div>
            <div className='content'>
                <InsertarEmpleado />
            </div>
        </div>
    );
};

export default Empleados;