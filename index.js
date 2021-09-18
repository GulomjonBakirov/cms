const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.DB, () => {
  console.log("DB connected successfully");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listened on ${port} port`);
});
