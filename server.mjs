import express from 'express';
import Swimmer from './classes/Swimmer.mjs'
import Organization from './classes/Organization.mjs'
import TrainingGroup from './classes/TrainingGroup.mjs'
import Group from './classes/Group.mjs'
import Practice from './classes/Practice.mjs'


const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
