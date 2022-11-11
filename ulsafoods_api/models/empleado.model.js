module.exports = (sequelize, Sequelize) => {
    const Empleado = sequelize.define("empleado", {
        nombre: {
            type: Sequelize.STRING
        },
        cafeteria: {
            type: Sequelize.STRING
        },
        area: {
            type: Sequelize.STRING
        },
        puesto: {
            type: Sequelize.STRING
        },
        salario: {
            type: Sequelize.FLOAT
        },
        url_imagen: {
            type: Sequelize.STRING
        },
    });
    return Empleado;
};