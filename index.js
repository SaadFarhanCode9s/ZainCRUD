const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const routes = require('./routes/index')

const port = 9595;


//Intiailize Express App
const app = express();

//Enabling CORS for any unknown origin (https://xyz.example.com) 
app.use(cors());


// Parse application/json
app.use(bodyParser.json());


// application routes
app.use("/", routes);

//App listening on:
app.listen(port, () => {
    console.log(`Expense managment app listening on port ${port}`)
});