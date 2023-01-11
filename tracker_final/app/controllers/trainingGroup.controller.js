const db = require("../models");
const Practice = db.practices;
const TrainingGroup = db.trainingGroups;

exports.create = (trainingGroup) => {
    return TrainingGroup.create({
        name: trainingGroup.name,
    })
        .then((trainingGroup) => {
            console.log(">> Created trainingGroup: " + JSON.stringify(trainingGroup, null, 2));
            return trainingGroup;
        })
        .catch((err) => {
            console.log(">> Error while creating TrainingGroup: ", err);
        })
}

exports.findAll = () => {
    return TrainingGroup.findAll({
      include: [
        {
          model: Practice,
          as: "practices",
          attributes: ["id", "date", "practiceInput"],
          through: {
            attributes: [],
          },
        },
      ],
    })
      .then((trainingGroups) => {
        return trainingGroups;
      })
      .catch((err) => {
        console.log(">> Error while retrieving TrainingGroups: ", err);
      });
};

exports.findById = (id) => {
return TrainingGroup.findByPk(id, {
      include: [
        {
            model: Practice,
            as: "practices",
            attributes: ["id", "date", "practiceInput"],
            through: {
              attributes: [],
            },
        },
      ],
    })
        .then((trainingGroup) => {
            return trainingGroup;
        })
        .catch((err) => {
            console.log(">> Error while finding TrainingGroup: ", err);
        });
};