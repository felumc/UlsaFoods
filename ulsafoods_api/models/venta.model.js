module.exports = (sequelize, Sequelize) => {
    const Venta = sequelize.define("venta", {
        id_cliente: {
            type: Sequelize.INTEGER
        },
        fecha: {
            type: Sequelize.DATEONLY
        },
        monto_final: {
            type: Sequelize.INTEGER
        },
        estatus: {
            type: Sequelize.STRING
        },
    });
 
    return Venta;
}