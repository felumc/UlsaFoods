import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const InsertarEmpleado = () => {
    const [lgShow, setLgShow] = useState(false);

    // Envio de formulario

    const [nombre, setNombre] = useState("");
    const [cafeteria, setCafeteria] = useState("");
    const [area, setArea] = useState("");
    const [puesto, setPuesto] = useState("");
    const [salario, setSalario] = useState("");

    //Subir imagen a servidor
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "mtb0144")
        data.append("cloud_name", "dx2kgjjmf")
        data.append("folder", "ulsafoods_empleados")
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
            let res = await fetch('http://localhost:9595/administrador/empleado', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: '',
                    nombre: nombre,
                    cafeteria: cafeteria,
                    area: area,
                    puesto: puesto,
                    salario: salario,
                    url_imagen: url,
                    createdAt: '',
                    updatedAt: '',
                }),
            });
            if (res.status === 200) {
                setNombre("");
                setCafeteria("")
                setArea("");
                setPuesto("");
                setSalario("");
                setImage("");
                setUrl("");
                setMessage("Empleado agregado con éxito");
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
    const [empleado, setEmpleado] = React.useState([])

    React.useEffect(() => {
        obtenerDatos();
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:9595/administrador/empleados');
        const empleados = await data.json();
        setEmpleado(empleados);
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
                        Agregar un nuevo empleado
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
                        <Form.Group className="mb-3" controlId="formBasicCafeteria">
                            <Form.Label>Cafeteria</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa la cafeteria" onChange={(e) => setCafeteria(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicArea">
                            <Form.Label>Area</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa el area" onChange={(e) => setArea(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPuesto">
                            <Form.Label>Puesto</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa el puesto" onChange={(e) => setPuesto(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSalario">
                            <Form.Label>Salario</Form.Label>
                            <Form.Control type="float" placeholder="Ingresa el salario" onChange={(e) => setSalario(e.target.value)} />
                        </Form.Group>
                        <Button className="btnp" variant="success" type="submit" >
                            Agregar
                        </Button>
                        <div className="message">{message ? <p>{message}</p> : null}</div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Container>
                <Button onClick={() => setLgShow(true)} color='primary' className='float-right'>Insertar un nuevo empleado</Button>
                <br /><br />

                <input type="text" id="myInput" onKeyUp={busqueda} placeholder="Search for names.." title="Type in a name" />

                <Table striped bordered hover id="myTable">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Cafeteria</th>
                            <th>Area</th>
                            <th>Puesto</th>
                            <th >Salario</th>
                        </tr>
                    </thead>
                    <tbody>{
                        empleads.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.cafeteria}</td>
                                <td>{item.puesto}</td>
                                <td>{item.salario}</td>
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

export default InsertarEmpleado;