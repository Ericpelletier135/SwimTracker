const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
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
db.organizations = require("./organization.model.js")(sequelize, Sequelize);
db.groups = require("./groups.model.js")(sequelize, Sequelize);
db.trainingGroups = require("./trainingGroup.model.js")(sequelize, Sequelize);
db.swimmers = require("./swimmer.model.js")(sequelize, Sequelize);
db.practices = require("./practice.model.js")(sequelize, Sequelize);
module.exports = db;