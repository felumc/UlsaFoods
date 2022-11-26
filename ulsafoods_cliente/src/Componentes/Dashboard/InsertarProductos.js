import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { Table, Container } from 'reactstrap';
import { useState } from 'react';
import Swal from 'sweetalert2'


const InsertarProductos = () => {

    document.title = "Productos";


    // Mostrar-Ocultar Modal para agregar
    const [lgShow, setLgShow] = useState(false);

    // Variable para mostrar modal de edición
    const [EditarShow, setEditarShow] = useState(false);

    // Variable para listar producto con id especifico
    const [EditProducto, setEditProducto] = React.useState([])

    // Variables para agregar o editar
    const [nombre, setNombre] = useState("");
    const [stock, setStock] = useState("");
    const [precio, setPrecio] = useState("");
    const [cafeteria, setCafeteria] = useState("");
    const [categoria, setCategoria] = useState("");

    // Variables para subir imagen a servidor
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    // Consumo de api para subir imagen a servidor
    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "mtb0144")
        data.append("cloud_name", "dx2kgjjmf")
        data.append("folder", "ulsafoods_productos")
        fetch("  https://api.cloudinary.com/v1_1/dx2kgjjmf/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => console.log(err))
    }



    // Consumo de la api para metodo post
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:9595/administrador/producto', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: '',
                    nombre: nombre,
                    stock: stock,
                    price: precio,
                    cafeteria: cafeteria,
                    url_imagen: url,
                    categoria: categoria,
                    createdAt: '',
                    updatedAt: '',
                }),
            });
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto agregado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                setNombre("");
                setCategoria("");
                setStock("");
                setPrecio("");
                setImage("");
                setCafeteria("")
                setUrl("");
                window.location.reload()
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al guardar producto',
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
            title: '¿Estas seguro que quieres eliminar este producto?',

            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            buttonsStyling: false

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto eliminado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                borra();
            }
        })

        let borra = async () => {

            try {
                let res = await fetch('http://localhost:9595/administrador/producto/' + id_eliminar, {
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
                    console.log("usuario eliminado con exito")
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
            const data = await fetch('http://localhost:9595/administrador/producto/' + id_editar);
            const users = await data.json();
            setEditProducto(users);
        }
        obtenerDatos();
        // Muestro el modal con esos datos
        setEditarShow(true);
    }

    // Validación de edición {Rellenar valores que se quedaran igual}
    const valida = () => {

        if (nombre === "") {
            var n = document.getElementById("formBasicNombre").value;
            setNombre(n);
        }
        if (stock === "") {
            var s = document.getElementById("formBasicStock").value;
            setStock(s)
        }
        if (precio === "") {
            var p = document.getElementById("formBasicPrecio").value;
            setPrecio(p)
        }
        if (categoria === "") {

            var c = document.getElementById("formBasicCategoria").value;
            setCategoria(c)

        }
        if (cafeteria === "") {

            var caf = document.getElementById("formBasicCafeteria").value;
            setCafeteria(caf)

        }
        if (url === "") {

            var url_e = document.getElementById("formBasicImage").name;
            setUrl(url_e)

        }


    }

    // Consumo de la api para editar un producto
    let handleEdit = async (e) => {
        e.preventDefault();
        // Jalo el valor del input con el id
        const id_editar_val = document.getElementById('formId').value;

        try {
            let res = await fetch('http://localhost:9595/administrador/producto/' + id_editar_val, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: nombre,
                    stock: stock,
                    price: precio,
                    cafeteria: cafeteria,
                    url_imagen: url,
                    categoria: categoria,
                }),
            });
            if (res.status === 200) {
                setNombre("");
                setCategoria("");
                setStock("");
                setPrecio("");
                setImage("");
                setCafeteria("")
                setUrl("");
                console.log("La edición fue exitosa");
                Swal.fire({
                    icon: 'success',
                    title: 'Producto editado con éxito',
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
    const [producto, setProducto] = React.useState([])

    React.useEffect(() => {
        obtenerDatos();
    }, [])

    // Metodo get de la api
    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:9595/administrador/productos/');
        const productos = await data.json();
        setProducto(productos);
    }

    //Barra de busqueda
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

    // Función para refactorizar
    const Mostrar = event =>{
        
        const url_imag = event.currentTarget.id;

        Swal.fire({

           
            imageUrl: url_imag,
            showConfirmButton: false,
            
        })


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
                        Editar Producto
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id='modal-body'>
                    <Form onSubmit={handleEdit} >
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formId">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="number" value={EditProducto.id} disabled />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicImage">
                                        <Form.Label>Sube tu imagen</Form.Label>
                                        <Form.Control type="file" name={EditProducto.url_imagen} onBlur={uploadImage} onChange={(e) => setImage(e.target.files[0])} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicNombre">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" Value={EditProducto.nombre} onChange={(e) => setNombre(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPrecio">
                                        <Form.Label>Precio</Form.Label>
                                        <Form.Control type="float" Value={EditProducto.price} onChange={(e) => setPrecio(e.target.value)} />
                                    </Form.Group>


                                </Col>

                                <Col >
                                    <Form.Group className="mb-3" controlId="formBasicStock">
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="number" Value={EditProducto.stock} onChange={(e) => setStock(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCategoria">
                                        <Form.Label>Categoria</Form.Label>
                                        <Form.Control type="text" Value={EditProducto.categoria} onChange={(e) => setCategoria(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCafeteria">
                                        <Form.Label>Cafetería</Form.Label>
                                        <Form.Control type="text" Value={EditProducto.cafeteria} onChange={(e) => setCafeteria(e.target.value)} />
                                    </Form.Group>
                                    <Button style={{ width: "100%" }} className="dv" type="submit" onClick={valida}>
                                        Editar
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
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
                        Agregar un producto
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicImage">
                                    <Form.Label>Sube tu imagen</Form.Label>
                                    <Form.Control type="file" onBlur={uploadImage} onChange={(e) => setImage(e.target.files[0])} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicNombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa el nombre" onChange={(e) => setNombre(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicStock">
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Control type="number" placeholder="Ingresa el stock" onChange={(e) => setStock(e.target.value)} />
                                </Form.Group>
                                <Button style={{ width: "100%" }} className="dv" type="submit" >
                                    Agregar
                                </Button>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPrecio">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="float" placeholder="Ingresa el precio" onChange={(e) => setPrecio(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCategoria">
                                    <Form.Label>Categoria</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa la categoria" onChange={(e) => setCategoria(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCafeteria">
                                    <Form.Label>Cafeteria</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa la cafeteria" onChange={(e) => setCafeteria(e.target.value)} />
                                </Form.Group>

                            </Col>


                        </Row>

                    </Form>
                </Modal.Body>
            </Modal>
            <Container>
                <button onClick={() => setLgShow(true)} className='dv'>Insertar nuevo producto</button>
                <br /><br />

                <input type="text" id="myInput" onKeyUp={busqueda} placeholder="Buscar por nombre de producto" title="Type in a name" />

                <Table striped bordered hover id="myTable">
                    <thead className='t'>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Categoría</th>
                            <th>Cafeteria</th>
                            <th >Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='tb'>{
                        producto.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                <td>{item.categoria}</td>
                                <td>{item.cafeteria}</td>
                                <td>
                                    <Button id={item.id} onClick={Editar} className='CRUD' variant="primary">Editar</Button>{'     '}
                                    <Button id={item.id} onClick={Eliminar} className='CRUD' variant="danger">Eliminar</Button>{'    '}
                                    <Button id={item.url_imagen} onClick={Mostrar} className='CRUD' variant="warning">Ver imagen</Button>{'    '}
                                </td>
                            </tr>))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default InsertarProductos;