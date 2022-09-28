const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "..", "/data/character.json")

class Character {
  constructor(name, image) {
    this.id=Math.random()*1;
    this.name = name;
    this.image = image;
  }
  save() {
    fs.readFile(p, (err, fContent) => {
      console.log(p);
      let content = [];
      if (!err) {
        content = JSON.parse(fContent);
      }
      content.push(this);
      console.log(content);
      fs.writeFile(p, JSON.stringify(content), (err) => console.log(err));
    })
  }
  static getAll(callBack) {
    fs.readFile(p, (err, fContent) => {
      if (err) callBack([]);
      else {
        callBack(JSON.parse(fContent));
      }
    })
  }
}

module.exports = Character;