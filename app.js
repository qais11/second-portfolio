const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const port = 3000;
const app = express();


app.use(express.static(__dirname + '/public/'))

app.use(json());
app.use(cors());


app.listen(port , () => {
  console.log(`listenin' to prot ${port}`);
});
