var orm = require("../config/orm.js");

var celebrity = {
  all: function(cb) {
    orm.all("celebrities", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("celebrities", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("celebrities", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("celebrities", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = celebrity;
