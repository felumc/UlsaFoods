module.exports = app => {
    const det_venta = require("../controllers/det_venta.controller");

    var router = require("express").Router();
    // Crear una nueva det_venta
    router.post("/det_venta", det_venta.create); //http://localhost:9595/administrador/det_venta

    // Recuperar todas las det_ventas
    router.get("/det_ventas", det_venta.findAll); //http://localhost:9595/administrador/det_ventas/

    // Encontrar det_venta por id
    router.get("/det_venta/:id", det_venta.findOne); //http://localhost:9595/administrador/det_venta/[id]

    // Actualizar det_venta por id
    router.put("/det_venta/:id", det_venta.update); //http://localhost:9595/administrador/det_venta/[id]

    // Eliminar una det_venta por id
    router.delete("/det_venta/:id", det_venta.delete); //http://localhost:9595/administrador/det_venta/[id]

    // Eliminar todas las det_ventas de la base de datos
    router.delete("/det_ventasALL", det_venta.deleteAll); //http://localhost:9595/administrador/det_ventasALL/

    app.use('/administrador', router);
};
