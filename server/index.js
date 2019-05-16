require("dotenv").config();
const express = require('express');
const massive = require('massive')
const axios = require('axios');
const controller = require('./controller');

const app = express();

const { PORT, CONNECTION_STRING } = process.env;

app.use(express.json());


massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Listening in on ${ PORT }`)
})