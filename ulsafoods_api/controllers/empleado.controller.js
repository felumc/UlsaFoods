const db = require("../models");
const Empleado = db.empleado;
const Op = db.Sequelize.Op;
var path = require('path');

// Crear y Guardar un nuevo empleado
exports.create = (req, res) => {
    // Validar request
    if (!req.body.nombre) {
        res.status(400).send({
            mensaje: "El contenido no puede ser vacio, nombre="
        });
        return;
    }

    // Crear un empleado
    const empleado = {
        nombre: req.body.nombre,
        cafeteria: req.body.stock,
        area: req.body.area,
        puesto: req.body.puesto,
        salario: req.body.salario,
        url_imagen: req.body.url_imagen
    };

    // Guardar el empleado en la base de datos
    Empleado.create(empleado)
        .then(empleado => {
            res.status(200).send(empleado);
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje:
            //         err.message || "Ocurrio un error al crear el empleado."
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Recuperar todos los empleados de la base de datos
exports.findAll = (req, res) => {
    Empleado.findAll()
        .then(empleado => {
            res.status(200).send(empleado);
        })
        .catch(err => {
            res.status(500).send({
                mensaje:
                    err.message || "Ocurrio un error al recuperar todos los empleados."
            });
        });
};

// Encontrar empleado por id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Empleado.findByPk(id)
        .then(empleado => {
            res.status(200).send(empleado);
        })
        .catch(err => {
            res.status(500).send({
                mensaje: "Error al recuperar el empleado por id=" + id
            });
        });
};
// Actualizar empleado por id
exports.update = (req, res) => {
    const id = req.params.id;
    Empleado.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "El empleado se actualizo con exito."
                });
            } else {
                // res.send({
                //     mensaje: `Error al actualizar el empleado con id=${id}!`
                // });
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje: "Error al actualizar el empleado con id=" + id
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar un empleado por id
exports.delete = (req, res) => {
    const id = req.params.id;
    Empleado.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Empleado eliminado con exito!"
                });
            } else {
                // res.send({
                //     mensaje: `Error al eliminar empleado con id=${id}!`
                // });
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje: "Error al eliminar empleado con id=" + id
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar todos los empleados de la base de datos
exports.deleteAll = (req, res) => {
    Empleado.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.status(200).send({ mensaje: `${nums} Los empleados fueron eliminados con exito!` });
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje:
            //         err.message || "Error al eliminar los empleados."
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};
