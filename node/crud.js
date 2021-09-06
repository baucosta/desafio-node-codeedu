const { query } = require("./connection");

module.exports = {
  get: function (callback) {
    query("select *From people", function (error, result, field) {
        if (error) {
            req.json(error);
        } else {
            callback("success", result);
        }
    });
  },
};