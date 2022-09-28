const express = require("express");
const router = express.Router();
const Character = require("../model/character.js");

router.get("/all", (req, res) => {
  Character.getAll(r => res.render("character.ejs", { data: r }));
});


module.exports = router;