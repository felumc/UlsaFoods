import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const InsertarProductos = () => {

    document.title="Productos";

    const [lgShow, setLgShow] = useState(false);

    // Envio de formulario

    const [nombre, setNombre] = useState("");
    const [stock, setStock] = useState("");
    const [precio, setPrecio] = useState("");
    const [cafeteria, setCafeteria] = useState("");

    //Subir imagen a servidor
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

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

    const [message, setMessage] = useState("");

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
                    precio: precio,
                    cafeteria: cafeteria,
                    url_imagen: url,
                    createdAt: '',
                    updatedAt: '',
                }),
            });
            if (res.status === 200) {
                setNombre("");
                setStock("");
                setPrecio("");
                setImage("");
                setCafeteria("")
                setUrl("");
                setMessage("Producto agregado con éxito");
                window.location.reload()
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                setMessage("Ocurrio un error");
            }
        } catch (err) {
            console.log(err);
        }
    };

    //Generar tabla
    const [producto, setProducto] = React.useState([])

    React.useEffect(() => {
        obtenerDatos();
    }, [])

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

    return (
        <div>
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
                        <Form.Group className="mb-3" controlId="formBasicPrecio">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="float" placeholder="Ingresa el precio" onChange={(e) => setPrecio(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCafeteria">
                            <Form.Label>Cafeteria</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa la cafeteria" onChange={(e) => setCafeteria(e.target.value)} />
                        </Form.Group>
                        <Button className="dv" type="submit" >
                            Agregar
                        </Button>
                        <div className="message">{message ? <p>{message}</p> : null}</div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Container>
                <Button onClick={() => setLgShow(true)} className='dv'>Insertar nuevo producto</Button>
                <br /><br />

                <input type="text" id="myInput" onKeyUp={busqueda} placeholder="Buscar por nombre de producto" title="Type in a name" />

                <Table striped bordered hover id="myTable">
                    <thead className='t'>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Stock</th>
                            <th>Precio</th>
                            <th>Cafeteria</th>
                            <th >Acciones</th>
                        </tr>
                    </thead>
                    <tbody>{
                        producto.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.stock}</td>
                                <td>{item.precio}</td>
                                <td>{item.cafeteria}</td>
                                <td>
                                    <Button variant="primary">Editar</Button>{'     '}
                                    <Button variant="danger">Eliminar</Button>{'    '}
                                    <Button variant="warning">Ver imagen</Button>
                                </td>
                            </tr>))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default InsertarProductos;