module.exports = app => {
    const practices = require("../controllers/practice.controller.js");

    var router = require("express").Router();

    router.get("/practices", practices.create);

    router.post("/practices", practices.findAll);

}