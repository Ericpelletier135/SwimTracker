const db = require("../models");
const Practice = db.practices;
const TrainingGroup = db.trainingGroups;

exports.create = (practice) => {
    return Practice.create({
        date: practice.date,
        practiceInput: practice.practiceInput,
    })
        .then((practice) => {
            console.log(">> Created Practice: " + JSON.stringify(practice, null, 2));
            return practice;
        })
        .catch((err) => {
            console.log(">> Error while creating Tag: ", err);
        })
}

exports.findAll = () => {
    return Practice.findAll({
        include: [
            {
                model: TrainingGroup,
                as: "trainingGroup",
                attributes: ["id", "name"],
                through: {
                    attributes: [],
                }
            },
        ],
    })
        .then((practices) => {
            return practices;
        })
        .catch((err) => {
            console.log(">> Error while retrieving Tags: ", err);
        })
}

exports.findById = (id) => {
    return Practice.findByPk(id, {
        include: [
            {
                model: TrainingGroup,
                as: "trainingGroups",
                attributes: ["id", "name"],
                through: {
                    attributes: [],
                }
            },
        ],
    })
        .then((practice) => {
            return practice;
        })
        .catch((err) => {
            console.log(">> Error while retrieving Tags: ", err);
        })
}