const express = require("express");
const mongoose = require("mongoose");
const dbConnect = require('./config/dbconnect.js');
const app = express();

const Port = process.env.port || 5000;

app.route("/").get((req, res) => {
  console.log("IMAD ALZAYAT");
  res.send("Imad alzayat");
});

dbConnect();

app.listen(Port , () => {
    console.log(`Server is running at ${Port}`);
});

//emad
//V6u9E4uThWl0rxy3
