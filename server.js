// Setup empty JS object to act as endpoint for all routes
// add an empty objecty to add data on 
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 5500;
// Spin up the server
const server = app.listen(port, listening);
function listening(){
    // Callback to debug
    console.log(`running on localhost: ${port}`);
    console.log(projectData);
};
// Initialize all route with a callback function
// GET route
// when get a request send data to client
app.get('/all', sendData);
// Callback function to complete GET '/all'
function sendData (req, res) {
  res.send(projectData);
};
// Post Route
// POST in coming function
app.post('/add', function addW (request, response) {
  projectData.temperature = request.body.temperature;
  projectData.date = request.body.date;
  projectData.userResponse = request.body.userResponse;
  response.end();
  console.log(projectData);
  
  

});