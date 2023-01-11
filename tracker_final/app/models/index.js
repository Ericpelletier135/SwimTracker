const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  port: dbConfig.PORT,
  logging: log => console.log('logging:', log)
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.organizations = require("./organization.model.js")(sequelize, Sequelize);
db.groups = require("./group.model.js")(sequelize, Sequelize);
db.trainingGroups = require("./trainingGroup.model.js")(sequelize, Sequelize);
db.swimmers = require("./swimmer.model.js")(sequelize, Sequelize);
db.practices = require("./practice.model.js")(sequelize, Sequelize);

// organization 1--* groups
db.organizations.hasMany(db.groups, { as: "groups" });
db.groups.belongsTo(db.organizations, {
  foreignKey: "organization_id",
  as: "organization",
});

// group *--* swimmer
db.swimmers.belongsToMany(db.groups, {
  through: "group_swimmer",
  as: "groups",
  foreignKey: "swimmer_id",
});
db.groups.belongsToMany(db.swimmers, {
  through: "group_swimmer",
  as: "swimmers",
  foreignKey: "swimmer_id",
});

// group *--* trainingGroup
db.trainingGroups.belongsToMany(db.groups, {
  through: "group_trainingGroup",
  as: "groups",
  foreignKey: "trainingGroup_id",
});
db.groups.belongsToMany(db.trainingGroups, {
  through: "group_trainingGroup",
  as: "trainingGroups",
  foreignKey: "group_id",
});

// trainingGroup *--* swimmer
db.swimmers.belongsToMany(db.trainingGroups, {
  through: "trainingGroup_swimmer",
  as: "trainingGroups",
  foreignKey: "swimmer_id",
});
db.trainingGroups.belongsToMany(db.swimmers, {
  through: "trainingGroup_swimmer",
  as: "swimmers",
  foreignKey: "trainingGroup_id",
});

// trainingGroup *--* practice
db.practices.belongsToMany(db.trainingGroups, {
  through: "trainingGroup_practice",
  as: "trainingGroups",
  foreignKey: "practice_id",
});
db.trainingGroups.belongsToMany(db.practices, {
  through: "trainingGroup_practice",
  as: "practices",
  foreignKey: "trainingGroup_id",
});


module.exports = db;
