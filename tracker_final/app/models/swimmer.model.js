module.exports = (sequelize, Sequelize) => {
    const Swimmer = sequelize.define("swimmer", {
        name: {
            type: Sequelize.STRING
        }
    });
    return Swimmer;
};