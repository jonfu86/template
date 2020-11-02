const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const cors = require('cors');
const db = require('../database');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get('', (req, res) => {
  const { id } = req.params;

});
