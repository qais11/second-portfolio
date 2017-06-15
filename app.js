const express = require('express');
const {json} = require('body-parser');
const port = 5000;
const app = express();
const config = require('./config.js');
const favicon = require('serve-favicon');

app.use(express.static(__dirname + '/public/'))
app.use(express.static('public'))

app.use(json());


app.listen(process.env.PORT || port , () => {
  console.log(`listenin' to prot ${port}`);
});
module.exports = app
