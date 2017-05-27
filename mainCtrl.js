const app = require("./index.js")
const db = app.get("db")


module.exports = {  //allows exportation from exports object

test: (req, res) => {
  db.getImages( (err, images) => {   //tells db to perform sql query
    console.log("Sniper on target");
    res.status(200).send(images)
  })
}



};
