const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
//local
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.producto = require("./producto.model.js")(sequelize, Sequelize);
db.cliente = require("./cliente.model.js")(sequelize, Sequelize);
db.venta = require("./venta.model.js")(sequelize, Sequelize);
db.det_venta = require("./det_venta.model.js")(sequelize, Sequelize);

// Relaciones
db.cliente.hasMany(db.venta, {
    foreignKey: "id_cliente",
});
db.venta.belongsTo(db.cliente, {
    foreignKey: "id_cliente",
});

db.venta.hasMany(db.det_venta, {
    foreignKey: "id_venta",
});
db.det_venta.belongsTo(db.venta, {
    foreignKey: "id_venta",
});
db.producto.hasMany(db.det_venta, {
    foreignKey: "id_producto",
});
db.det_venta.belongsTo(db.producto, {
    foreignKey: "id_producto",
});

module.exports = db;
