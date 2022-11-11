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
db.empleado = require("./empleado.model.js")(sequelize, Sequelize);

/*db.usuario = require("./usuario.model.js")(sequelize, Sequelize);*/

//establecer las relaciones
//-----------tabla usuario
/*db.rol.hasMany(db.usuario, {
    foreignKey: "rol_id",
});

db.usuario.belongsTo(db.rol, {
    foreignKey: "rol_id",
});*/

module.exports = db;
