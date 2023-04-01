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
