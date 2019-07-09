var express = require("express");

var router = express.Router();

var celebrity = require("../models/celebrity.js");

router.get("/", function (req, res) {
  celebrity.all(function (data) {
    var hbsObject = {
      celebrities: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/celebrities", function (req, res) {
  celebrity.create([
    "name", "exiled"
  ], [
      req.body.name, req.body.exiled
    ], function (result) {

      res.json({ id: result.insertId });
    });
});

router.put("/api/celebrities/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  celebrity.update({
    exiled: req.body.exiled
  }, condition, function (result) {
    if (result.changedRows == 0) {
  
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/celebrities/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  celebrity.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end()
    } else {
      return res.status(200).end();
    }
  })
})

module.exports = router;
