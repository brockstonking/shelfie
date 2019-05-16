const express = require('express');
const axios = require('axios');
const controller = require('./controller');

const app = express();

const PORT = 8060

app.listen(PORT, () => {
    console.log(`Listening in on ${ PORT }`)
})