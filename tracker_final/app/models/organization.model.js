module.exports = (sequelize, Sequelize) => {
    const Organization = sequelize.define("organization", {
        name: {
            type: Sequelize.STRING
        }
    });
    return Organization;
};