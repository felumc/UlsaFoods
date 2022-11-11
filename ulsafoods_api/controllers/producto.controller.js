const db = require("../models");
const Producto = db.producto;
const Op = db.Sequelize.Op;
var path = require('path');

// Crear y Guardar un nuevo Producto
exports.create = (req, res) => {
    // Validar request
    if (!req.body.nombre) {
        res.status(400).send({
            mensaje: "El contenido no puede ser vacio, nombre="
        });
        return;
    }

    // Crear un Producto
    const producto = {
        nombre: req.body.nombre,
        stock: req.body.stock,
        precio: req.body.precio,
        cafeteria:req.body.cafeteria,
        url_imagen: req.body.url_imagen
    };

    // Guardar Producto en la base de datos
    Producto.create(producto)
        .then(producto => {
            res.status(200).send(producto);
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje:
            //         err.message || "Ocurrio un error al crear Producto."
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Recuperar todos los Productos de la base de datos
exports.findAll = (req, res) => {
    Producto.findAll()
        .then(producto => {
            res.status(200).send(producto);
        })
        .catch(err => {
            res.status(500).send({
                mensaje:
                    err.message || "Ocurrio un error al recuperar todos los Productos."
            });
        });
};

// Encontrar Producto por id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Producto.findByPk(id)
        .then(producto => {
            res.status(200).send(producto);
        })
        .catch(err => {
            res.status(500).send({
                mensaje: "Error al recuperar Producto por id=" + id
            });
        });
};
// Actualizar Producto por id
exports.update = (req, res) => {
    const id = req.params.id;
    Producto.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Producto se actualizo con exito."
                });
            } else {
                // res.send({
                //     mensaje: `Error al actualizar Producto con id=${id}!`
                // });
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje: "Error al actualizar Producto con id=" + id
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar un Producto por id
exports.delete = (req, res) => {
    const id = req.params.id;
    Producto.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Producto eliminado con exito!"
                });
            } else {
                // res.send({
                //     mensaje: `Error al eliminar Producto con id=${id}!`
                // });
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje: "Error al eliminar Producto con id=" + id
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar todos los Producto de la base de datos
exports.deleteAll = (req, res) => {
    Producto.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.status(200).send({ mensaje: `${nums} Productos fueron eliminados con exito!` });
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje:
            //         err.message || "Error al eliminar Productos."
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};
