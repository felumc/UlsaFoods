import React from 'react';


const TablaGestionProductos = () => {
    return (
        <div className='table-container'>
            <h1>Gesti&oacute;n de Productos</h1>
            <div className='entradas'>
                <select id="inputEntries" className="form-control">
                    <option selected>No. de entradas</option>
                    <option>10</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </div>
            <br />
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">No.</th>
                        <th scope="col">Nombre Cafete&iacute;a</th>
                        <th scope='col'>Producto</th>
                        <th scope="col">Categor&iacute;a</th>
                        <th scope="col">Añadido</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Estatus</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >
                            <div class="form-check">
                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="elegir" aria-label="..." />
                            </div>
                        </td>
                        <td>1</td>
                        <td>San Dam&iacute;an</td>
                        <td>Hamburguesa Sencilla</td>
                        <td>Preparados</td>
                        <td>Varela</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-check">
                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="elegir" aria-label="..." />
                            </div>
                        </td>
                        <td>2</td>
                        <td>San Dam&iacute;an</td>
                        <td>Torta Jam&oacute;n</td>
                        <td>Preparados</td>
                        <td>Varela</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-check">
                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="elegir" aria-label="..." />
                            </div>
                        </td>
                        <td>3</td>
                        <td>Ra&iacute;z</td>
                        <td>Hamburguesa con Papas</td>
                        <td>Preparados</td>
                        <td>Luis Fe</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TablaGestionProductos;