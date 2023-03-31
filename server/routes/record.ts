// SOURCE: https://www.mongodb.com/languages/mern-stack-tutorial
// WRITTEN BY: Dishant Behera (B00843009, ds418021@dal.ca)

const express = require("express");
const userRoutes = express.Router();
const dbo = require("../db/conn.ts");
const ObjectId = require("mongodb").ObjectId;

  // This will get a single user by id
  userRoutes.route("/user/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectId(req.params.id) };
    db_connect
      .collection("users")
      .findOne(myquery, function (err, result) {
        if (err) {
          throw err;
        }
        else {
          res.json(result);
        }
      });
  });

  // This will update a user by id.
  userRoutes.route("/profile/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectId(req.params.id) };
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
        if (err) {
          throw err;
        }
        else {
          console.log("Document updated");
          response.json(res);
        }
      });
  });


  // This section will help you delete a record
  userRoutes.route("/delete/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectId(req.params.id) };
    db_connect.collection("users").deleteOne(myquery, function (err, obj) {
      if (err) {
        throw err;
      }
      else {
        console.log("Document deleted");
        response.json(obj);
      }
    });
  });


module.exports = userRoutes;
