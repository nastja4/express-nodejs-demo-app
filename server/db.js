/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_CONNECTION_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Error while connecting to database"));