const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const conn = require("./DBconnect");

app.use(cors());
app.use(express.json());
app.use("/api",require("./router"))

app.listen(8000, (err) => {
  if (!err) {
    console.log("server is running");
  } else {
    console.log(err);
  }
});
