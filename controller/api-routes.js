// =============================================================
// =============================================================
//                          ROUTES
// =============================================================
// Initialize DB
const db = require("../models");
module.exports = app => {
  // Get route for viewing burgers
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/burgers", (req, res) => {
    db.Burgers.findAll({}).then(burgers => {
      res.json(burgers);
    });
  });

  app.post("/eat/:id", (req, res) => {
    db.Burgers.update({ isEaten: 1 }, { where: { id: req.params.id } }).then(
      updated => {
        res.json(updated);
      }
    );
  });

  app.post("/uneat/:id", (req, res) => {
    db.Burgers.update({ isEaten: 0 }, { where: { id: req.params.id } }).then(
      updated => {
        res.json(updated);
      }
    );
  });

  app.post("/burgers", (req, res) => {
    console.log(req.body);
    db.Burgers.create({ name: req.body.burger }).then(() => {
      res.redirect("/");
    });
  });
};
