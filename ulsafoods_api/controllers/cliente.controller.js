const db = require("../models");
const Cliente = db.cliente;
const Op = db.Sequelize.Op;
var path = require('path');

// Crear y Guardar un nuevo Cliente
exports.create = (req, res) => {
    // Validar request
    if (!req.body.nombre) {
        res.status(400).send({
            mensaje: "El contenido no puede ser vacio"
        });
        return;
    }

    // Crear un Cliente
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
};

// Recuperar todos los Clientees de la base de datos
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
