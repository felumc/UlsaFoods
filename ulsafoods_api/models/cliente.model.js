module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
        matricula: {
            type: Sequelize.STRING
        },
        nombre: {
            type: Sequelize.STRING
        },
        apepat: {
            type: Sequelize.STRING
        },
        apemat: {
            type: Sequelize.STRING
        },
        carrera: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        contrasenia: {
            type: Sequelize.STRING
        },
    });

    return Cliente;
};