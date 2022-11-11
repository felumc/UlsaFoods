module.exports = (sequelize, Sequelize) => {
    const producto = sequelize.define("producto", {
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

    return producto;
};
