module.exports = app => {
    const empleado = require("../controllers/empleado.controller");

    var router = require("express").Router();
    // Crear un nuevo empleado
    router.post("/empleado", empleado.create); //http://localhost:9595/administrador/empleado

    // Recuperar todos los empleados
    router.get("/empleados", empleado.findAll); //http://localhost:9595/administrador/empleados

    // Encontrar empleado por id
    router.get("/empleado/:id", empleado.findOne); //http://localhost:9595/administrador/empleado/[id]

    // Actualizar empleado por id
    router.put("/empleado/:id", empleado.update); //http://localhost:9595/administrador/empleado/[id]

    // Eliminar un empleado por id
    router.delete("/empleado/:id", empleado.delete); //http://localhost:9595/administrador/empleado/[id]

    // Eliminar todos los productos de la base de datos
    router.delete("/empleadosALL", producto.deleteAll); //http://localhost:9595/administrador/empleadosALL/

    app.use('/administrador', router);
};