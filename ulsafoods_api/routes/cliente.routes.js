module.exports = app => {
    const cliente = require("../controllers/cliente.controller.js");

    var router = require("express").Router();
    // Crear un nuevo cliente 
    router.post("/cliente", cliente.create); //http://localhost:9595/administrador/cliente

    // Recuperar todos los clientes
    router.get("/clientes", cliente.findAll); //http://localhost:9595/administrador/clientes/

    // Encontrar cliente por id
    router.get("/cliente/:id", cliente.findOne); //http://localhost:9595/administrador/cliente/[id]

    // Actualizar cliente por id
    router.put("/cliente/:id", cliente.update); //http://localhost:9595/administrador/cliente/[id]

    // Eliminar un cliente por id
    router.delete("/cliente/:id", cliente.delete); //http://localhost:9595/administrador/cliente/[id]

    // Eliminar todos los clientes de la base de datos
    router.delete("/clientesALL", cliente.deleteAll); //http://localhost:9595/administrador/clienteesALL/

    router.post("/cliente/login", cliente.login); //http://localhost:9595/administrador/login

    app.use('/administrador', router);
};
