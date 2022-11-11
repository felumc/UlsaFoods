import React from 'react';
import {NavLink} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import '../../Css/Dashboard/slideBar.css';

const SlideBar = () => {
    return (
        <div className='slidebar'>
            <ul>
                <li>
                    <NavLink to="/Dashboard/productos" className='text-dark rounded py-2 w-100 d-inline-block px-3' activeclassname='active'><FaIcons.FaCarrot className='me-2'/> Productos</NavLink>
                </li>
                <li>
                    <NavLink to="/Dashboard/ventas" className='text-dark rounded py-2 w-100 d-inline-block px-3' activeclassname='active'><FaIcons.FaCashRegister className='me-2'/> Ventas</NavLink>
                </li>
                <li>
                    <NavLink to="/Dashboard/empleados" className='text-dark rounded py-2 w-100 d-inline-block px-3' activeclassname='active'><FaIcons.FaHouseUser className='me-2'/> Empleados</NavLink>
                </li>
                <li>
                    <NavLink to="/Dashboard/reportes" className='text-dark rounded py-2 w-100 d-inline-block px-3' activeclassname='active'><FaIcons.FaClipboardList className='me-2'/> Reportes</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SlideBar;