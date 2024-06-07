const { checkConnection, syncModels } = require("./db/db"); 
const User = require("./api/models/user.model"); 
const Movie = require("./api/models/movie.model");

const express = require("express"); 
const morgan = require("morgan"); 
const port = 3000; 

const checkAndSync = async () => {
  await checkConnection();
  await syncModels();
};

const initializeAndListen = () => {

  express()
    .use(morgan("dev")) 
    .use(express.json()) 
    .use("/api", require("./api/router/index")) 
    .listen(port, () => {
      console.log(`> Listening on port: ${port}`); 
    });
};

const startAPI = async () => {
  await checkAndSync(); 
  initializeAndListen(); 
};

startAPI(); 
