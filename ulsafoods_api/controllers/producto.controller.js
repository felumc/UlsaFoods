const db = require("../models");
const Comentario = db.comentario;
const Op = db.Sequelize.Op;
var path = require('path');

// Crear y Guardar un nuevo Comentario
exports.create = (req, res) => {
    // Validar request
    if (!req.body.nombre) {
        res.status(400).send({
            mensaje: "El contenido no puede ser vacio, nombre=" + req.body.nombre + " descripcion=" + req.body.descripcion
        });
        return;
    }

    // Crear un Comentario
    const comentario = {
        nombre: req.body.nombre,
        pista: req.body.pista,
        comentario: req.body.comentario,
        edad:req.body.edad,
        pais:req.body.pais,
        url_imagen: req.body.url_imagen
    };

    // Guardar Comentario en la base de datos
    Comentario.create(comentario)
        .then(comentario => {
            res.status(200).send(comentario);
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje:
            //         err.message || "Ocurrio un error al crear Comentario."
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Recuperar todos los Comentarios de la base de datos
exports.findAll = (req, res) => {
    Comentario.findAll()
        .then(comentario => {
            res.status(200).send(comentario);
        })
        .catch(err => {
            res.status(500).send({
                mensaje:
                    err.message || "Ocurrio un error al recuperar todos los Comentarios."
            });
        });
};

// Encontrar Comentario por id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Comentario.findByPk(id)
        .then(comentario => {
            res.status(200).send(comentario);
        })
        .catch(err => {
            res.status(500).send({
                mensaje: "Error al recuperar Comentario por id=" + id
            });
        });
};
// Actualizar Comentario por id
exports.update = (req, res) => {
    const id = req.params.id;
    Comentario.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Comentario se actualizo con exito."
                });
            } else {
                // res.send({
                //     mensaje: `Error al actualizar Comentario con id=${id}!`
                // });
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje: "Error al actualizar Comentario con id=" + id
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar un Comentario por id
exports.delete = (req, res) => {
    const id = req.params.id;
    Comentario.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Comentario eliminado con exito!"
                });
            } else {
                // res.send({
                //     mensaje: `Error al eliminar Comentario con id=${id}!`
                // });
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje: "Error al eliminar Comentario con id=" + id
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar todos los Comentario de la base de datos
exports.deleteAll = (req, res) => {
    Comentario.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.status(200).send({ mensaje: `${nums} Comentarios fueron eliminados con exito!` });
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje:
            //         err.message || "Error al eliminar Comentarios."
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};
