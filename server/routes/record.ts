// SOURCE: https://www.mongodb.com/languages/mern-stack-tutorial
// WRITTEN BY: Dishant Behera & Dhruvil Trivedi (B00843009, ds418021@dal.ca) (B00839059, dh461268@dal.ca)

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

 //This will check if the user already exists then don't add to Db otherwise add it
 userRoutes.route("/registration").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    email: req.body.email,
    eduName: req.body.eduName,
    password: req.body.password,
  };

  db_connect.collection("users").findOne({email: req.body.email}).then((savedUser)=>{
    if(savedUser){
        return response.status(422).json({error:"user already exist."});
    }else{
      db_connect.collection("users").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
      });
    }
  });
});

// This will help in login
 userRoutes.route("/login/:email").get(function (req, response) {
  let db_connect = dbo.getDb();
  db_connect.collection("users").findOne({email: req.param}).then((savedUser)=>{
    if(savedUser){
        return response.status(200);
    }else{
      return response.status(422).json({error:"user doesn't exists."});
    }
  })
});


 
module.exports = userRoutes;
