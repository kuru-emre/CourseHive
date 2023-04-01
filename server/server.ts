// SOURCE: https://www.mongodb.com/languages/mern-stack-tutorial
// WRITTEN BY: Dishant Behera (B00843009, ds418021@dal.ca)


const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record.ts"));
// get driver connection
const dbo = require("./db/conn.ts");

app.listen(port, async () => {
  // perform a database connection when server starts
  await dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});

