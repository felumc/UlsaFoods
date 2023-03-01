module.exports = (sequelize, Sequelize) => {
    const Det_Venta = sequelize.define("det_venta", {
        id_venta: {
            type: Sequelize.INTEGER
        },
        id_producto: {
            type: Sequelize.INTEGER
        },
        cantidad: {
            type: Sequelize.INTEGER
        },
        total_producto: {
            type: Sequelize.INTEGER
        },
    });
 
    return Det_Venta;
}