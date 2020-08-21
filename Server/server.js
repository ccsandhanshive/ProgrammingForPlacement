const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
 
// Configuring the database
const dbConfig = require('./app/config/db.config.js');
const mongoose = require('mongoose');
 
const problem = require('./app/models/problem.model.js');
const webad=require("./app/models/webad.model.js")
 
mongoose.Promise = global.Promise;
 
// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to MongoDB.");    
 

 
}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});
 
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions))
 
require('./app/routes/routes.js')(app);
 
// Create a Server
const server = app.listen(3000, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})
 
