// const express = require("express");
 
// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
// const userRoutes = express.Router();
 
// // This will help us connect to the database
// const dbo = require("../db/conn.ts");
 
// // This help convert the id from string to ObjectId for the _id.
// const ObjectId = require("mongodb").ObjectId;


// // This section will help you get a list of all the records.
// userRoutes.route("/record").get(function (req, res) {
//     let db_connect = dbo.getDb("test");
//     db_connect
//       .collection("users")
//       .find({})
//       .toArray(function (err, result) {
//         if (err) throw err;
//         res.json(result);
//       });
// });


// // This section will help you update a record by id.
// userRoutes.route("/update/:id").post(function (req, response) {
//     let db_connect = dbo.getDb();
//     let myquery = { _id: ObjectId(req.params.id) };
//     let newvalues = {
//         $set: {
//             linkedin: req.body.linkedin,
//             hobbies: req.body.hobbies,
//             goals: req.body.goals,
//             experience: req.body.experience
//         },
//     };
//     db_connect
//         .collection("users")
//         .updateOne(myquery, newvalues, function (err, res) {
//             if (err) throw err;
//             console.log("1 document updated");
//             response.json(res);
//             }
//         );
// });

const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const userRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn.ts");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
userRoutes.route("/").get(async function (req, response) {
  let db_connect = dbo.getDb();

  try {
    var records = await db_connect
      .collection("users")
      .find({})
      .toArray();
    response.json(records);
  } catch (e) {
    console.log("An error occurred pulling the records. " + e);
  }

});

// This section will help you update a record by id.
userRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
        linkedin: req.body.linkedin,
        hobbies: req.body.hobbies,
        goals: req.body.goals,
        experience: req.body.experience
    },
  };
  db_connect
    .collection("users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
 });
 
module.exports = userRoutes;
