const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// get db and controllers
const db = require("./app/models");
const PracticeController = require("./app/controllers/practice.controller");
const TrainingGroupController = require("./app/controllers/trainingGroup.controller");


db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// //use this in development to drop exsiting tables from database
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//     run();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/practice.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
