// Express & Express Handlebars
const express = require("express");
const exphb = require("express-handlebars");

// Initialize Express
const app = express();

// Sets port to use host server port or 8080 for development
const PORT = process.env.PORT || 8080;

// Initialize DB
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(__dirname + "/public"));

// Sets view enging to use handlebars
app.engine("handlebars", exphb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./controller/api-routes.js")(app);

// Updates DB before beginning the express service
// force:true is essentially the same as DROP DATABASE IF EXISTS
db.sequelize.sync({ force: true }).then(function() {
  db.Burgers.create({name:"Cheeseburger", isEaten:false})
  app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
  });
 });
