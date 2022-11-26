import React from 'react';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import '../../Css/Dashboard/slideBar.css';

const SlideBar = () => {
    return (
        <div className='slidebar'>
            <ul>
                <li>
                    <NavLink to="/Dashboard/productos"  className='text-light rounded py-2 w-100 d-inline-block px-3' activeclassname='active'><FaIcons.FaCarrot className='me-2' color="white" /> Productos</NavLink>
                </li>
                <li>
                    <NavLink to="/Dashboard/clientes" className='text-light rounded py-2 w-100 d-inline-block px-3' activeclassname='active'><FaIcons.FaUsers className='me-2' color="white" /> Clientes</NavLink>
                </li>
                <li>
                    <NavLink to="/Dashboard/empleados" className='text-light rounded py-2 w-100 d-inline-block px-3' activeclassname='active'><FaIcons.FaStickyNote className='me-2' color="white" />Pedidos</NavLink>
                </li>
                <li>
                    <NavLink to="/Dashboard/reportes" className='text-light rounded py-2 w-100 d-inline-block px-3' activeclassname='active'><FaIcons.FaClipboardList className='me-2' color="white" /> Reportes</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SlideBar;