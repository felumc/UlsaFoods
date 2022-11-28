module.exports = (sequelize, Sequelize) => {
    const producto = sequelize.define("producto", {
        nombre: {
            type: Sequelize.STRING
        },
        stock: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.FLOAT
        },
        cafeteria: {
            type: Sequelize.STRING
        },
        categoria: {
            type: Sequelize.STRING
        },
        url_imagen: {
            type: Sequelize.STRING
        },
        estado: {
            type: Sequelize.STRING
        },
    });

    return producto;
};
