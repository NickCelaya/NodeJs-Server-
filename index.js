
const express = require("express")
const bodyParser = require("body-parser")
const massive = require("massive")
const cors = require("cors")
const config = require("./config")


const app = module.exports = express();


app.use(bodyParser.json());
app.use(cors());



const massiveInstance = massive.connectSync({
  connectionString: config.connectionString
  // connectionString: "postgres://postgres:password@localhost/nameofDB"
});

app.set("db", massiveInstance); //creates key value pair object on app settings. log app to see.
const db = app.get("db") // calls on app to get db object



const mainCtrl = require("./mainCtrl")




//endpoints here
app.get("/imageTest", mainCtrl.test)






const PORT = 3100;
app.listen(PORT, () => {
  console.log("War on port:", PORT);
});
