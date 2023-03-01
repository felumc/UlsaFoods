const db = require("../models");
const Venta = db.venta;
const Op = db.Sequelize.Op;
var path = require('path');

// Crear y Guardar una nueva Venta
exports.create = (req, res) => {
    // Validar request
    if (!req.body.monto_final) {
        res.status(400).send({
            mensaje: "El contenido no puede ser vacio!"
        });
        return;
    }

    // Crear una Venta
    const venta = {
        id_cliente: req.body.id_cliente,
        fecha: req.body.fecha,
        monto_final: req.body.monto_final,
        estatus: req.body.estatus
    };

    // Guardar Venta en la base de datos
    Venta.create(venta)
        .then(venta => {
            res.status(200).send(venta);
        })
        .catch(err => {
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Recuperar todas las Ventas de la base de datos
exports.findAll = (req, res) => {
    Venta.findAll()
        .then(venta => {
            res.status(200).send(venta);
        })
        .catch(err => {
            res.status(500).send({
                mensaje:
                    err.message || "Ocurrio un error al recuperar todos los Ventas."
            });
        });
};

// Encontrar Venta por id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Venta.findByPk(id)
        .then(venta => {
            res.status(200).send(venta);
        })
        .catch(err => {
            res.status(500).send({
                mensaje: "Error al recuperar Venta por id=" + id
            });
        });
};
// Actualizar Venta por id
exports.update = (req, res) => {
    const id = req.params.id;
    Venta.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Venta se actualizo con exito."
                });
            } else {
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar una Venta por id
exports.delete = (req, res) => {
    const id = req.params.id;
    Venta.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Venta eliminada con exito!"
                });
            } else {
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar todas las Ventas de la base de datos
exports.deleteAll = (req, res) => {
    Venta.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.status(200).send({ mensaje: `${nums} Ventas fueron eliminadas con exito!` });
        })
        .catch(err => {
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};
