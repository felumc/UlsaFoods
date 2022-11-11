module.exports = (sequelize, Sequelize) => {
    const comentario = sequelize.define("comentario", {
        nombre: {
            type: Sequelize.STRING
        },
        stock: {
            type: Sequelize.STRING
        },
        precio: {
            type: Sequelize.FLOAT
        },
        url_imagen: {
            type: Sequelize.STRING
        }
    });

    return comentario;
};
