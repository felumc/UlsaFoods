module.exports = app => {
    const producto = require("../controllers/producto.controller");

    var router = require("express").Router();
    // Crear un nuevo producto
    router.post("/producto", producto.create); //http://localhost:9595/administrador/producto

    // Recuperar todos los producto
    router.get("/productos", producto.findAll); //http://localhost:9595/administrador/productos/

    // Encontrar producto por id
    router.get("/producto/:id", producto.findOne); //http://localhost:9595/administrador/producto/[id]

    // Actualizar producto por id
    router.put("/producto/:id", producto.update); //http://localhost:9595/administrador/producto/[id]

    // Eliminar un producto por id
    router.delete("/producto/:id", producto.delete); //http://localhost:9595/administrador/producto/[id]

    // Eliminar todos los comnetarios de la base de datos
    router.delete("/comentariosALL", producto.deleteAll); //http://localhost:9595/administrador/comentariosALL/

    app.use('/administrador', router);
};
