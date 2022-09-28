const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const addOn = require("./routes/add-on.js");
const allCharacter = require("./routes/all-character.js");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(addOn);
app.use(allCharacter);
app.listen();

