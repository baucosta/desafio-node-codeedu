const { query } = require("./connection");
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    query("INSERT INTO people(name) values('Amaury')", function (error, result, field) {
        if (error) {
            req.json(error);
        }
    });
    query("select *From people", function (error, result, field) {
        if (error) {
            req.json(error);
        } else {
          res.render('people-list', { title: 'People List', peopleData: result});
        }
    });
});

module.exports = router;

// module.exports = {
//   get: function (callback) {
//     query("select *From people", function (error, result, field) {
//         if (error) {
//             req.json(error);
//         } else {
//             callback("success", result);
//         }
//     });
//   },

//   insert: function (callback) {
//     query("INSERT INTO people(name) values('Amaury')", function (error, result, field) {
//         if (error) {
//             req.json(error);
//         } else {
//             callback("success", result);
//         }
//     });
//   },
// };