module.exports = app => {
    const venta = require("../controllers/venta.controller");

    var router = require("express").Router();
    // Crear una nueva venta
    router.post("/venta", venta.create); //http://localhost:9595/administrador/venta

    // Recuperar todas las ventas
    router.get("/ventas", venta.findAll); //http://localhost:9595/administrador/ventas/

    // Encontrar venta por id
    router.get("/venta/:id", venta.findOne); //http://localhost:9595/administrador/venta/[id]

    // Actualizar venta por id
    router.put("/venta/:id", venta.update); //http://localhost:9595/administrador/venta/[id]

    // Eliminar una venta por id
    router.delete("/venta/:id", venta.delete); //http://localhost:9595/administrador/venta/[id]

    // Eliminar todas las ventas de la base de datos
    router.delete("/ventasALL", venta.deleteAll); //http://localhost:9595/administrador/ventasALL/

    app.use('/administrador', router);
};
