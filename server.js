const express        = require('express');
const bodyParser     = require('body-parser');
const cors = require('cors')

const app            = express();


const port = 8080;
console.log("launching server")

require('./routes')(app, {});

const publicRoot = './dist'

app.use(express.static(publicRoot)) 

app.use(cors())
app.listen(port, () => {
  console.log('We are live on ' + port);
});