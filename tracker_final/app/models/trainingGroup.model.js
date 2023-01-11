module.exports = (sequelize, Sequelize) => {
    const TrainingGroup = sequelize.define("trainingGroup", {
        name: {
            type: Sequelize.STRING
        }
    });
    return TrainingGroup;
};