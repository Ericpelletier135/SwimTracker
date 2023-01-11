module.exports = (sequelize, Sequelize) => {
    const Practice = sequelize.define("practice", {
        date: {
            type: Sequelize.DATE
        },
        practiceInput: {
            type: Sequelize.ARRAY(Sequelize.ENUM)
        }
    });
    return Practice;
};