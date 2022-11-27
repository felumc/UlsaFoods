const db = require("../models");
const Det_Venta = db.det_venta;
const Op = db.Sequelize.Op;
var path = require('path');

// Crear y Guardar una nueva Det_Venta
exports.create = (req, res) => {
    // Validar request
    if (!req.body.monto_final) {
        res.status(400).send({
            mensaje: "El contenido no puede ser vacio!"
        });
        return;
    }

    // Crear una Det_Venta
    const det_venta = {
        id_venta: req.body.id_venta,
        id_producto: req.body.id_producto,
        cantidad: req.body.cantidad,
        total_producto: req.body.total_producto,
    };

    // Guardar Det_Venta en la base de datos
    Det_Venta.create(det_venta)
        .then(det_venta => {
            res.status(200).send(det_venta);
        })
        .catch(err => {
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Recuperar todas las Det_Ventas de la base de datos
exports.findAll = (req, res) => {
    Det_Venta.findAll()
        .then(det_venta => {
            res.status(200).send(det_venta);
        })
        .catch(err => {
            res.status(500).send({
                mensaje:
                    err.message || "Ocurrio un error al recuperar todos los Det_Ventas."
            });
        });
};

// Encontrar Det_Venta por id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Det_Venta.findByPk(id)
        .then(det_venta => {
            res.status(200).send(det_venta);
        })
        .catch(err => {
            res.status(500).send({
                mensaje: "Error al recuperar Det_Venta por id=" + id
            });
        });
};
// Actualizar Det_Venta por id
exports.update = (req, res) => {
    const id = req.params.id;
    Det_Venta.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Det_Venta se actualizo con exito."
                });
            } else {
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar una Det_Venta por id
exports.delete = (req, res) => {
    const id = req.params.id;
    Det_Venta.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Det_Venta eliminada con exito!"
                });
            } else {
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar todas las Det_Ventas de la base de datos
exports.deleteAll = (req, res) => {
    Det_Venta.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.status(200).send({ mensaje: `${nums} Det_Ventas fueron eliminadas con exito!` });
        })
        .catch(err => {
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};
