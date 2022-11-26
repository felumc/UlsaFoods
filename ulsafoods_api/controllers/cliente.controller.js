const db = require("../models");
const Cliente = db.cliente;
const Op = db.Sequelize.Op;
var path = require('path');

// Crear y Guardar un nuevo Cliente
exports.create = (req, res) => {
    Cliente.findOne({ where: { correo: req.body.correo } })
        .then(cliente => {
            // Validar request
            if (cliente) {
                res.status(400).send({
                    mensaje: "Correo existente"
                });
                return;
            } else {

                const cliente = {
                    matricula: req.body.matricula,
                    nombre: req.body.nombre,
                    apepat: req.body.apepat,
                    apemat: req.body.apemat,
                    carrera: req.body.carrera,
                    correo: req.body.correo,
                    contrasenia: req.body.contrasenia,
                };

                // Guardar Cliente en la base de datos
                Cliente.create(cliente)
                    .then(cliente => {
                        res.status(200).send(cliente);
                    })
                    .catch(err => {
                        // res.status(500).send({
                        //     mensaje:
                        //         err.message || "Ocurrio un error al crear Cliente."
                        // });
                        res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
                    });
            }
        })
        .catch(err => {
            // res.status(500).send({
            //   mensaje: "Error al recuperar Usuario por correo"
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Recuperar todos los Clientes de la base de datos
exports.findAll = (req, res) => {
    Cliente.findAll()
        .then(cliente => {
            res.status(200).send(cliente);
        })
        .catch(err => {
            res.status(500).send({
                mensaje:
                    err.message || "Ocurrio un error al recuperar todos los Clientees."
            });
        });
};

// Encontrar Cliente por id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Cliente.findByPk(id)
        .then(cliente => {
            res.status(200).send(cliente);
        })
        .catch(err => {
            res.status(500).send({
                mensaje: "Error al recuperar Cliente por id=" + id
            });
        });
};
// Actualizar Cliente por id
exports.update = (req, res) => {
    const id = req.params.id;
    Cliente.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Cliente se actualizo con exito."
                });
            } else {
                // res.send({
                //     mensaje: `Error al actualizar Cliente con id=${id}!`
                // });
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje: "Error al actualizar Cliente con id=" + id
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar un Cliente por id
exports.delete = (req, res) => {
    const id = req.params.id;
    Cliente.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Cliente eliminado con exito!"
                });
            } else {
                // res.send({
                //     mensaje: `Error al eliminar Cliente con id=${id}!`
                // });
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje: "Error al eliminar Cliente con id=" + id
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar todos los Cliente de la base de datos
exports.deleteAll = (req, res) => {
    Cliente.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.status(200).send({ mensaje: `${nums} Clientes fueron eliminados con exito!` });
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje:
            //         err.message || "Error al eliminar Clientees."
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

//Login por correo y contraseña
exports.login = (req, res) => {
    Cliente.findOne({ where: { correo: req.body.correo, contrasenia: req.body.contrasenia } })
        .then(cliente => {
            // Validar request
            if (cliente) {
                res.status(200).send(cliente);
                return;
            } else {
                res.status(400).send({
                    mensaje: "Correo o contraseña incorrectos"
                });
            }
        })
        .catch(err => {
            // res.status(500).send({
            //   mensaje: "Error al recuperar Usuario por correo"
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
}

//Encontrar Cliente por correo
exports.findOne = (req, res) => {
    const correo = req.params.correo;
    Cliente.findOne(correo)
        .then(cliente => {
            res.status(200).send(cliente);
        })
        .catch(err => {
            res.status(500).send({
                mensaje: "Error al recuperar Cliente por correo=" + correo
            });
        });
};