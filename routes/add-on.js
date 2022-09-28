const express = require("express");
const router = express.Router();
const Character = require("../model/character.js");

router.get("/", (req, res) => {
  res.render("data-add.ejs");
});

router.post("/data", (req, res) => {
  const one = new Character(req.body.aniChar, req.body.aniImage);
  one.save();
  res.redirect("/all");
})

module.exports = router;