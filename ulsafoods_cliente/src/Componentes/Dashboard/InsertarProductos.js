import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const InsertarProductos = () => {
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
                    cafeteria:cafeteria,
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
                        <Button className="btnp" variant="success" type="submit" >
                            Agregar
                        </Button>
                        <div className="message">{message ? <p>{message}</p> : null}</div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Container>
                <Button onClick={() => setLgShow(true)} color='primary' className='float-right'>Insertar nuevo producto</Button>
                <br /><br />
                <Table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Id</th>
                            <th>Producto</th>
                            <th>Cafeter&iacute;a</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.state.data.map((elemento)=>(
                            <tr>
                                <td><input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="elegir" aria-label="..." /></td>
                                <td>{elemento.id}</td>
                                <td>{elemento.nombre}</td>
                                <td>{elemento.cafeteria}</td>
                                <td>{elemento.precio}</td>
                                <td>{elemento.cantidad}</td>
                                <td><Button color="danger">Eliminar</Button></td>
                            </tr>
                        ))} */}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default InsertarProductos;