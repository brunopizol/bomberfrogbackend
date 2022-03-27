const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//models

const Ranking = require("./Models/Ranking");
const Player = require("./Models/Player");


//controllers
const playerController = require("./Controllers/playersController");
const rankingController = require("./Controllers/rankingController.js");



//view engine
app.set('view engine', 'ejs');

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8080, () => {
    console.log("O servidor está rodando!");
})