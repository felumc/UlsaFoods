import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';

const CrudAdministrador = () => {

    document.title = "Administrador";

    // Mostrar-Ocultar Modal para agregar
    const [lgShow, setLgShow] = useState(false);

    // Variable para mostrar modal de edición
    const [EditarShow, setEditarShow] = useState(false);

    // Variables para agregar o editar
    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    // Variable para listar producto con id especifico
    const [EditAdministrador, setEditAdministrador] = React.useState([])

    // Consumo de la api para metodo post
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:9595/administrador/cliente', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    correo: correo,
                    contrasenia: contrasenia,
                    rol: "Administrador"

                }),
            });
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Administrador agregado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                setCorreo("");
                setContrasenia("");
                window.location.reload()
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al guardar Administrador',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log("Ocurrio un error");
            }
        } catch (err) {
            console.log(err);
        }
    };

    // Consumo de api para eliminar usuario
    const Eliminar = event => {

        // Jalo el id del boton que es el mismo del usuario
        const id_eliminar = event.currentTarget.id;

        Swal.fire({
            title: '¿Estas seguro que quieres eliminar a este administrador?',

            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            buttonsStyling: false

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Administrador eliminado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                borra();
            }
        })

        let borra = async () => {

            try {
                let res = await fetch('http://localhost:9595/administrador/cliente/' + id_eliminar, {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    }),
                });
                if (res.status === 200) {
                    window.location.reload()
                    window.scrollTo(0, document.body.scrollHeight);
                    console.log("Administrador eliminado con exito")
                } else {
                    console.log("Error al eliminar");
                }
            } catch (err) {
                console.log(err);
            }
        };

    }

    // Consumo de api para devolver los datos del producto a editar{Listar producto por id}
    const Editar = event => {
        // Jalo id del boton que es la misma del producto a editar
        const id_editar = event.currentTarget.id;
        const obtenerDatos = async () => {
            const data = await fetch('http://localhost:9595/administrador/cliente/' + id_editar);
            const users = await data.json();
            setEditAdministrador(users);
        }
        obtenerDatos();
        // Muestro el modal con esos datos
        setEditarShow(true);
    }

    // Validación de edición {Rellenar valores que se quedaran igual}
    const valida = () => {

        if (correo === "") {
            var c = document.getElementById("formBasicCorreo").value;
            setCorreo(c);
        }
        if (contrasenia === "") {
            var p = document.getElementById("formBasicContrasenia").value;
            setContrasenia(p)
        }
    }

    // Consumo de la api para editar un producto
    let handleEdit = async (e) => {
        e.preventDefault();
        // Jalo el valor del input con el id
        const id_editar_val = document.getElementById('formId').value;

        try {
            let res = await fetch('http://localhost:9595/administrador/cliente/' + id_editar_val, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    correo: correo,
                    contrasenia: contrasenia,
                }),
            });
            if (res.status === 200) {
                setCorreo("");
                setContrasenia("");
                console.log("La edición fue exitosa");
                Swal.fire({
                    icon: 'success',
                    title: 'Administrador editado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.reload()
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                console.log("Ocurrio un error al editar");

            }
        } catch (err) {
            console.log(err);
        }
    };

    //  Variable para listar productos
    const [cliente, setCliente] = React.useState([])

    React.useEffect(() => {
        obtenerDatos();
    }, [])

    // Metodo get de la api
    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:9595/administrador/clientes/');
        const clientes = await data.json();
        setCliente(clientes);
    }


    const busqueda = () => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }

    }




    return (

        <div>
            {/* Modal para editar */}
            <Modal
                size="lg"
                show={EditarShow}
                onHide={() => setEditarShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Editar Administrador
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id='modal-body'>
                    <Form onSubmit={handleEdit} >

                        <Form.Group className="mb-3" controlId="formId">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="number" value={EditAdministrador.id} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNombre">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control Value={EditAdministrador.correo} r type="text" placeholder="Ingresa tu correo" onChange={(e) => setCorreo(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicContrasenia">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control Value={EditAdministrador.contrasenia} type="password" placeholder="Ingresa la contraseña" onChange={(e) => setContrasenia(e.target.value)} />
                        </Form.Group>
                        <button style={{ width: "100%" }} className="dv" type="submit" onClick={valida}>
                            Editar
                        </button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/*Modal para agregar producto*/}

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Agregar administrador
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicNombre">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control required type="text" placeholder="Ingresa tu correo" onChange={(e) => setCorreo(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicContrasenia">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control required type="password" placeholder="Ingresa la contraseña" onChange={(e) => setContrasenia(e.target.value)} />
                        </Form.Group>
                        <button style={{ width: "100%" }} className="dv" type="submit" >
                            Agregar
                        </button>
                    </Form>
                </Modal.Body>
            </Modal>

            <Container>
                <button onClick={() => setLgShow(true)} className='dv'>Agregar administrador</button>
                <br /><br />
                <input type="text" id="myInput" onKeyUp={busqueda} placeholder="Buscar por correo electrónico" title="Type in a name" />

                <Table striped bordered hover id="myTable">
                    <thead className='t'>
                        <tr>
                            <th>Id</th>
                            <th>Correo</th>
                            <th>Contraseña</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='tb'>{
                        cliente.map(item => (
                            item.rol === "Administrador"
                                ? <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.correo}</td>
                                    <td>{item.contrasenia}</td>
                                    <td>
                                        <Button id={item.id} onClick={Editar} className='CRUD' variant="primary">Editar</Button>{'     '}
                                        <Button id={item.id} onClick={Eliminar} className='CRUD' variant="danger">Eliminar</Button>{'    '}
                                    </td>
                                </tr>
                                : null

                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
export default CrudAdministrador