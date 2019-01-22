const express        = require('express');
const bodyParser     = require('body-parser');
const cors = require('cors')

const app = express();


const port = process.env.PORT || 8000;
console.log("launching server")

require('./routes')(app, {});

// const publicRoot = 'index.html'
// C:\djRepo\mapTest\mapTest\index.html

// app.use(express.static(publicRoot)) 
//app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.listen(port, () => {
  console.log('We are live on ' + port);
});